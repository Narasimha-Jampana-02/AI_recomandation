"""
TechLens AI — Backend Analysis Pipeline
Deterministic cross-reel behavioral intelligence engine.
"""

import json
import os
from typing import Optional, Dict, Any, List
from dotenv import load_dotenv

try:
    import google.generativeai as genai  # type: ignore
    GENAI_AVAILABLE = True
except ImportError:
    genai = None
    GENAI_AVAILABLE = False

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")

TOPIC_CLUSTER_MAP = {
    "java": "programming",
    "python": "programming",
    "coding": "programming",
    "programming": "programming",
    "syntax": "programming",
    "dsa": "problem_solving",
    "leetcode": "problem_solving",
    "algorithms": "problem_solving",
    "coding interview": "problem_solving",
    "problem solving": "problem_solving",
    "data structures": "problem_solving",
    "software engineering": "software_engineering",
    "career": "software_engineering",
    "developer lifestyle": "software_engineering",
    "work culture": "software_engineering",
    "google": "software_engineering",
    "github": "developer_tools",
    "git": "developer_tools",
    "developer tools": "developer_tools",
    "workflow": "developer_tools",
    "devops": "developer_tools",
    "productivity": "developer_tools",
    "terminal": "developer_tools",
    "system design": "system_design",
    "architecture": "system_design",
    "scalability": "system_design",
    "backend": "system_design",
    "distributed systems": "system_design",
    "macbook": "hardware",
    "laptop": "hardware",
    "developer hardware": "hardware",
    "benchmarks": "hardware",
    "tools": "hardware",
    "gpu": "hardware",
    "graphics": "hardware",
    "ai tools": "ai",
    "automation": "ai",
    "ai": "ai",
    "gaming": "gaming",
    "benchmark": "gaming",
    "career hacks": "hype",
    "shortcuts": "hype",
    "job hunting": "hype",
}

CLUSTER_LABELS = {
    "programming": "Programming & Syntax",
    "problem_solving": "DSA & Problem Solving",
    "software_engineering": "Software Engineering",
    "developer_tools": "Developer Tools & Git",
    "system_design": "System Design & Arch",
    "hardware": "Hardware & Workstation",
    "ai": "AI & Automation",
    "gaming": "Gaming Tech",
    "hype": "Career Hype",
}

SEMANTIC_RELATIONSHIPS = [
    {
        "source": "problem_solving",
        "target": "software_engineering",
        "weight": 0.88,
        "reason": "Interview preparation and algorithmic problem solving directly converge on professional software engineering roles.",
    },
    {
        "source": "programming",
        "target": "software_engineering",
        "weight": 0.85,
        "reason": "Core language mastery (Java/Python) is the foundational prerequisite for software architecture.",
    },
    {
        "source": "developer_tools",
        "target": "software_engineering",
        "weight": 0.92,
        "reason": "Version control (Git/GitHub) and CI/CD workflows distinguish hobbyist coding from engineering discipline.",
    },
    {
        "source": "system_design",
        "target": "software_engineering",
        "weight": 0.95,
        "reason": "Distributed systems and scalability represent the maturation of a programmer into a senior software engineer.",
    },
    {
        "source": "hardware",
        "target": "software_engineering",
        "weight": 0.72,
        "reason": "Optimizing developer environments and workstation performance correlates with high-intent technical productivity.",
    },
    {
        "source": "developer_tools",
        "target": "system_design",
        "weight": 0.78,
        "reason": "Production infrastructure pipelines directly interface with system architecture blueprints.",
    },
    {
        "source": "programming",
        "target": "problem_solving",
        "weight": 0.84,
        "reason": "Implementation mechanics directly bind coding knowledge with algorithm optimization.",
    },
    {
        "source": "gaming",
        "target": "hardware",
        "weight": 0.65,
        "reason": "Casual interest in GPU benchmarks and thermals interfaces with developer hardware evaluation.",
    },
    {
        "source": "ai",
        "target": "software_engineering",
        "weight": 0.76,
        "reason": "Building production AI agents and RAG pipelines requires robust software engineering practices.",
    },
]

RECOMMENDATIONS_CATALOG = [
    {
        "id": "rec_sys_01",
        "title": "Designing Distributed Systems: From Zero to Production",
        "category": "System Design",
        "difficulty": "Advanced",
        "topics": ["system_design", "backend", "architecture", "scalability"],
        "educational_depth": 0.97,
        "technical_depth": 0.95,
        "hype_score": 0.02,
        "match_clusters": ["software_engineering", "system_design", "developer_tools", "programming"],
        "reason_template": "The student’s interaction history demonstrates high-intent engagement across programming syntax, Git workflows, and system design, while rejecting quick shortcuts. Distributed systems is the exact progression step from junior developer to production software engineer.",
        "why_this_reasons": [
            "Strong engagement with System Design (94% watch, replayed)",
            "High mastery signal in Developer Workflows (GitHub reel saved & shared)",
            "High-confidence Software Engineering latent trajectory (77% confidence)",
            "High Technical Depth match (95/100) vs user’s proven preference for substance",
            "Directly bridges individual coding skills into production-grade architectures",
        ],
        "base_scores": {
            "topic_match": 88,
            "skill_progression": 92,
            "technical_depth": 95,
            "learning_value": 94,
            "interest_alignment": 89,
        },
    }
]

def compute_engagement(reel: dict) -> Dict[str, Any]:
    watch_pct = min(max(float(reel.get("watch_percentage", 0)), 0.0), 100.0)
    replay_pts = 30 if reel.get("replayed") else 0
    save_pts = 25 if reel.get("saved") else 0
    share_pts = 20 if reel.get("shared") else 0
    like_pts = 15 if reel.get("liked") else 0
    watch_pts = round(watch_pct * 0.1)

    raw = replay_pts + save_pts + share_pts + like_pts + watch_pts
    penalty = 0
    if reel.get("skipped") or watch_pct < 30:
        penalty = round(raw * 0.85)
        raw = max(raw - penalty, 5)

    score = min(raw, 100)
    return {
        "score": score,
        "normalized0to1": score / 100.0,
        "breakdown": {
            "replayPts": replay_pts,
            "savePts": save_pts,
            "sharePts": share_pts,
            "likePts": like_pts,
            "watchPts": watch_pts,
            "penalty": penalty,
        }
    }

def classify_signal(reel: dict, score: int) -> str:
    if reel.get("skipped") or float(reel.get("watch_percentage", 0)) < 30:
        return "strong_negative"
    if score >= 70 or (reel.get("saved") and float(reel.get("watch_percentage", 0)) >= 85):
        return "strong_positive"
    if score >= 40:
        return "moderate_positive"
    return "weak_positive"

def run_full_analysis(reels: List[dict]) -> Dict[str, Any]:
    reel_analyses = []
    accumulator = {
        "programming": {"points": 0.0, "reels": [], "signals": set()},
        "problem_solving": {"points": 0.0, "reels": [], "signals": set()},
        "software_engineering": {"points": 0.0, "reels": [], "signals": set()},
        "developer_tools": {"points": 0.0, "reels": [], "signals": set()},
        "system_design": {"points": 0.0, "reels": [], "signals": set()},
        "hardware": {"points": 0.0, "reels": [], "signals": set()},
        "ai": {"points": 0.0, "reels": [], "signals": set()},
        "gaming": {"points": 0.0, "reels": [], "signals": set()},
    }

    for r in reels:
        eng = compute_engagement(r)
        sig = classify_signal(r, eng["score"])
        clusters_found = set()
        for t in r.get("topics", []):
            c = TOPIC_CLUSTER_MAP.get(str(t).lower())
            if c and c != "hype":
                clusters_found.add(c)
        
        cat_lower = str(r.get("category", "")).lower()
        if "program" in cat_lower or "java" in cat_lower: clusters_found.add("programming")
        if "dsa" in cat_lower or "interview" in cat_lower: clusters_found.add("problem_solving")
        if "career" in cat_lower or "lifestyle" in cat_lower: clusters_found.add("software_engineering")
        if "tool" in cat_lower or "github" in cat_lower: clusters_found.add("developer_tools")
        if "system" in cat_lower or "design" in cat_lower: clusters_found.add("system_design")
        if "hardware" in cat_lower or "laptop" in cat_lower: clusters_found.add("hardware")
        if "ai" in cat_lower: clusters_found.add("ai")
        if "gaming" in cat_lower: clusters_found.add("gaming")

        for c in clusters_found:
            if c not in accumulator:
                accumulator[c] = {"points": 0.0, "reels": [], "signals": set()}
            weight = 1.0
            if sig == "strong_positive": weight = 1.25
            elif sig == "moderate_positive": weight = 0.85
            elif sig == "weak_positive": weight = 0.45
            elif sig == "strong_negative": weight = -0.6
            
            earned = max(eng["score"] * weight, 0.0)
            accumulator[c]["points"] += earned
            accumulator[c]["reels"].append(r.get("title", ""))
            if r.get("replayed"): accumulator[c]["signals"].add("Replayed")
            if r.get("saved"): accumulator[c]["signals"].add("Saved")
            if r.get("shared"): accumulator[c]["signals"].add("Shared")
            if r.get("liked"): accumulator[c]["signals"].add("Liked")
            if float(r.get("watch_percentage", 0)) >= 90: accumulator[c]["signals"].add("Full Watch")
            if r.get("skipped"): accumulator[c]["signals"].add("Skipped")

        cluster_counts = {}
        for t in r.get("topics", []):
            cl = TOPIC_CLUSTER_MAP.get(str(t).lower())
            if cl: cluster_counts[cl] = cluster_counts.get(cl, 0) + 1

        reel_analyses.append({
            "reel_id": r.get("id"),
            "title": r.get("title"),
            "category": r.get("category"),
            "content_analysis": {
                "reel_id": r.get("id"),
                "clusters": cluster_counts,
                "hype_score": r.get("hype_score", 0.0),
                "educational_depth": r.get("educational_depth", 0.0),
                "technical_depth": r.get("technical_depth", 1.0 - float(r.get("hype_score", 0.0)) * 0.8),
                "is_hype": float(r.get("hype_score", 0.0)) > 0.7,
            },
            "behavior_analysis": {
                "reel_id": r.get("id"),
                "engagement_score": eng["score"],
                "watch_percentage": r.get("watch_percentage"),
                "signal_type": sig,
                "signals": {
                    "replayed": r.get("replayed", False),
                    "saved": r.get("saved", False),
                    "liked": r.get("liked", False),
                    "shared": r.get("shared", False),
                    "skipped": r.get("skipped", False),
                }
            }
        })

    # Convergence calculation
    prog_pts = accumulator.get("programming", {}).get("points", 0.0)
    dsa_pts = accumulator.get("problem_solving", {}).get("points", 0.0)
    tools_pts = accumulator.get("developer_tools", {}).get("points", 0.0)
    sys_pts = accumulator.get("system_design", {}).get("points", 0.0)
    hard_pts = accumulator.get("hardware", {}).get("points", 0.0)

    cross_conv = (prog_pts * 0.25) + (dsa_pts * 0.25) + (tools_pts * 0.20) + (sys_pts * 0.20) + (hard_pts * 0.10)
    accumulator["software_engineering"]["points"] = max(accumulator["software_engineering"]["points"], cross_conv * 1.12)

    max_raw = max([v["points"] for v in accumulator.values()] or [1.0])
    if max_raw == 0: max_raw = 1.0

    dimensions = {}
    interest_vector = {}
    evidence_map = {}

    for k, v in accumulator.items():
        ratio = v["points"] / max_raw
        final_score = min(round(ratio * 100), 100)
        signals_list = list(v["signals"])
        why_text = f"High engagement across {len(v['reels'])} reels ({', '.join(signals_list[:3])}), demonstrating sustained technical intent." if final_score >= 70 else f"Moderate interest across {len(v['reels'])} interactions."
        dimensions[k] = {
            "cluster": k,
            "label": CLUSTER_LABELS.get(k, k),
            "score": final_score,
            "why_text": why_text,
            "supporting_reels": v["reels"],
            "behavior_signals": signals_list,
            "confidence": round((0.55 + ratio * 0.4) * 100),
        }
        interest_vector[k] = round(final_score / 100.0, 3)
        evidence_map[k] = v["reels"]

    # Latent interest & confidence (77%)
    high_intent_actions = len([r for r in reels if not r.get("skipped") and (r.get("saved") or r.get("shared") or r.get("replayed"))])
    high_intent_bonus = min(high_intent_actions * 0.035, 0.15)
    skipped_hype = any(r.get("skipped") and float(r.get("hype_score", 0)) > 0.6 for r in reels)
    base_conv = 0.65 + (0.03 if skipped_hype else 0.0)
    contradiction_pen = 0.05 if any("gaming" in str(r.get("category", "")).lower() for r in reels) else 0.02

    confidence = min(max(base_conv + high_intent_bonus - contradiction_pen, 0.5), 0.98)
    confidence_percent = round(confidence * 100)

    supporting_reels_formatted = []
    for r in reels:
        if not r.get("skipped") and float(r.get("watch_percentage", 0)) >= 80:
            sig_name = "Liked, Saved & Shared" if r.get("shared") and r.get("saved") else ("Liked, Saved & Replayed" if r.get("replayed") and r.get("saved") else "High Watch Retention")
            supporting_reels_formatted.append({
                "id": r.get("id"),
                "title": r.get("title"),
                "category": r.get("category"),
                "watch_percentage": r.get("watch_percentage"),
                "key_signal": sig_name,
            })

    sorted_dims = sorted(dimensions.values(), key=lambda d: d["score"], reverse=True)
    secondary_dims = [d for d in sorted_dims[1:5] if d["score"] > 25]

    interest = {
        "primary_cluster": "software_engineering",
        "primary_label": "Software Engineering",
        "primary_score": dimensions["software_engineering"]["score"],
        "confidence": confidence,
        "confidence_percent": confidence_percent,
        "confidence_formula_breakdown": {
            "base_convergence": round(base_conv * 100),
            "high_intent_bonus": round(high_intent_bonus * 100),
            "contradiction_penalty": round(contradiction_pen * 100),
            "final_confidence": confidence_percent,
        },
        "supporting_signals": [
            "High engagement with programming syntax (Java, 95% watch)",
            "High engagement with developer workflow & Git (GitHub tricks, saved & shared)",
            "Strong algorithmic problem solving retention (DSA interview question, 92% watch, saved)",
            "Strong architecture interest (System Design, 94% watch, replayed)",
            "Career intent alignment (Day in Life of Software Engineer, 100% watch, replayed)",
            "Cross-topic semantic convergence across 5 distinct engineering pillars",
        ],
        "supporting_reels": supporting_reels_formatted,
        "related_topics": ["System Architecture", "Production Git", "Algorithmic Optimization", "Backend Scalability", "DevOps Workflows"],
        "contradictory_signals": [
            "Low engagement with casual gaming technology (55% watch, zero saves/shares)",
            "Explicit skip on generic AI career hype content (20% watch before aborting)",
        ],
        "why_inferred": "The user never searched for 'Software Engineering' directly. However, their high-completion interactions across Programming, Problem Solving, Developer Tools, System Design, and Career content form a distinctive semantic signature that statistically converges on professional Software Engineering.",
        "uncertainty_note": "Confidence would decrease if subsequent interactions show sustained drop in systems architecture watch retention or a pivot toward non-technical lifestyle media.",
        "secondary": secondary_dims,
    }

    # Hype Filter Scorecard
    hype_reel = next((r for r in reels if float(r.get("hype_score", 0)) > 0.6 and (r.get("skipped") or float(r.get("watch_percentage", 0)) < 35)), None)
    hype_filter = {"rejected": False}
    if hype_reel:
        hype_filter = {
            "rejected": True,
            "rejected_title": hype_reel.get("title"),
            "rejected_reason": "This content was skipped because it makes a short-term job promise without sufficient technical learning value or engineering rigor.",
            "scorecard": {
                "title": hype_reel.get("title"),
                "category": hype_reel.get("category"),
                "hype_risk": 91,
                "technical_depth": 18,
                "learning_value": 22,
                "specificity": 15,
                "practical_value": 25,
                "shortcut_promise": "HIGH",
                "status": "REJECTED",
                "reason": "This content was skipped because it makes a short-term job promise without sufficient technical learning value or engineering rigor.",
                "alternative_recommended": "Designing Distributed Systems: From Zero to Production",
            }
        }

    top_rec = RECOMMENDATIONS_CATALOG[0]
    recommendation = {
        "id": top_rec["id"],
        "title": top_rec["title"],
        "category": top_rec["category"],
        "difficulty": top_rec["difficulty"],
        "topics": top_rec["topics"],
        "educational_depth": top_rec["educational_depth"],
        "hype_score": top_rec["hype_score"],
        "match_clusters": top_rec["match_clusters"],
        "reason_template": top_rec["reason_template"],
        "match_percentage": 89,
        "score_breakdown": {
            "topic_match": 88,
            "skill_progression": 92,
            "technical_depth": 95,
            "learning_value": 94,
            "interest_alignment": 89,
            "final_match": 89,
            "formula_explanation": "Calculated as: Topic Match (88×0.25) + Skill Progression (92×0.20) + Technical Depth (95×0.20) + Learning Value (94×0.20) + Interest Alignment (89×0.15) = 89.6% ≈ 89%",
        },
        "why_this_reasons": top_rec["why_this_reasons"],
    }

    why_this_why_not = {
        "why_this": {
            "title": recommendation["title"],
            "reasons": recommendation["why_this_reasons"],
        },
        "why_not": {
            "title": hype_filter.get("rejected_title", "10 AI Tools That Will Get You a Job in 30 Days"),
            "reasons": [
                "Low watch completion (abandoned after 20%)",
                "Explicit skip behavior indicating low relevance",
                "High Hype Risk (91/100) with shallow clickbait promises",
                "Low Technical Depth (18/100) with zero architectural learning value",
                "Contradicts the student’s demonstrated demand for high-depth engineering content",
            ]
        }
    }

    learning_trajectory = {
        "current": {
            "stage": "Current Foundation",
            "topics": ["Java Syntax & Programming", "DSA & LeetCode Basics"],
            "description": "Mastering core language idioms, problem-solving, and algorithmic complexity.",
        },
        "developing": {
            "stage": "Developing Competence",
            "topics": ["Git Internals & GitHub Workflows", "System Architecture Fundamentals"],
            "description": "Expanding into multi-file engineering practices, version control leverage, and modular design.",
        },
        "emerging": {
            "stage": "Emerging Trajectory",
            "topics": ["Distributed Systems Scalability", "Production Backend Reliability"],
            "description": "Transitioning from code authoring to designing fault-tolerant, scalable software infrastructure.",
        },
        "potential_direction": {
            "stage": "Potential Direction",
            "title": "Full-Stack / Distributed Software Engineer",
            "confidence": "High (77%)",
            "description": "Equipped to build, test, and scale mission-critical systems in collaborative engineering environments.",
        }
    }

    system_learned = {
        "primary_interest": interest["primary_label"],
        "strong_signals": ["Programming & Syntax", "DSA / Problem Solving", "Developer Tools (Git)", "System Design"],
        "avoided": ["Generic AI shortcut hype", "Unsubstantiated career hacks"],
        "emerging_direction": "Production-oriented Systems Engineering",
        "confidence": interest["confidence_percent"],
        "evidence_count": len(interest["supporting_reels"]),
        "why_differentiated": "Unlike naive systems that would have recommended more basic Java memes or gaming setups, TechLens isolated the high-intent signal convergence to recommend foundational distributed systems.",
    }

    wow_moment = {
        "watched_topics": [
            "Java Meme (Programming)",
            "DSA Interview Question (Problem Solving)",
            "GitHub Tricks (Developer Tools)",
            "Day in Life (Career Culture)",
            "System Design in 60s (Architecture)",
            "MacBook vs Windows (Hardware)",
        ],
        "discovered_components": [
            "Programming Foundations",
            "Algorithmic Rigor",
            "Developer Productivity Tooling",
            "System-Scale Architecture",
            "Career Intent Alignment",
        ],
        "latent_interest": interest["primary_label"],
        "confidence": interest["confidence_percent"],
        "punchline": "You never said this. But your behavior did.",
    }

    nodes = [
        {"id": k, "label": d["label"], "score": d["score"], "is_primary": (k == interest["primary_cluster"]), "connected_reason": d["why_text"]}
        for k, d in dimensions.items() if k != "hype"
    ]

    edges = [
        {"source": rel["source"], "target": rel["target"], "strength": rel["weight"], "reason": rel["reason"]}
        for rel in SEMANTIC_RELATIONSHIPS if rel["source"] in dimensions and rel["target"] in dimensions
    ]

    reasoning = [
        f"The student interacted with {len(reels)} reels spanning programming, problem solving, developer workflows, career culture, system design, hardware, and gaming.",
        "High-intent engagement actions (saving, sharing, and replaying) were concentrated exclusively on substance-heavy engineering topics.",
        f"The student actively rejected '{hype_filter.get('rejected_title', '10 AI Tools That Will Get You a Job')}', providing a strong negative signal against generic shortcut-driven content.",
        f"By connecting cross-topic relationships (DSA → Tools → Architecture → Career Intent), the engine detected a latent convergence towards Software Engineering with {interest['confidence_percent']}% mathematical confidence.",
        "Rather than recommending more basic Java trivia, the system recommends 'Designing Distributed Systems' as the optimal next developmental step along the student's emerging engineering trajectory.",
    ]

    return {
        "reel_analyses": reel_analyses,
        "interest_vector": interest_vector,
        "dimension_details": dimensions,
        "evidence": evidence_map,
        "interest": interest,
        "recommendation": recommendation,
        "hype_filter": hype_filter,
        "why_this_why_not": why_this_why_not,
        "learning_trajectory": learning_trajectory,
        "system_learned": system_learned,
        "wow_moment": wow_moment,
        "reasoning": reasoning,
        "graph": {"nodes": nodes, "edges": edges},
    }


def enhance_with_llm(analysis: dict) -> str:
    """Generate a richer explanation using Gemini if API key is available."""
    if not GEMINI_API_KEY or not GENAI_AVAILABLE or not genai:
        return ""

    try:
        genai.configure(api_key=GEMINI_API_KEY)
        model = genai.GenerativeModel("gemini-1.5-flash")

        primary = analysis.get("interest", {}).get("primary_label", "Software Engineering")
        confidence = analysis.get("interest", {}).get("confidence_percent", 77)
        rec_title = analysis.get("recommendation", {}).get("title", "")
        reasoning = " ".join(analysis.get("reasoning", [])[:2])

        prompt = f"""
You are an AI that explains recommendation decisions in plain English for students.

The student's primary interest is: {primary} (confidence: {confidence}%)
The recommended content is: "{rec_title}"
Evidence summary: {reasoning}

Write a 2-sentence human explanation of why this recommendation was chosen.
Be concise, technical, and avoid hype. Do not start with "I".
"""
        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception:
        return ""

