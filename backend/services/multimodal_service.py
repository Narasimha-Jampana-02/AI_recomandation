"""
TechLens AI — Multimodal Content Understanding Pipeline & Dataset Ingestion
Maintains 3 strict separate concepts:
A. DATASET LABEL: Ground truth derived solely from parent folder. Never fed to AI.
B. AI CONTENT CLASSIFICATION: Derived independently from actual video frames/audio.
C. USER INTEREST INFERENCE: Emerges from cross-reel interaction telemetry.
"""

import os
import glob
import json
import time
import urllib.parse
from typing import List, Dict, Any, Optional
from services.video_analyzer import analyze_video_file

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(CURRENT_DIR, "..", ".."))

POSSIBLE_REELS_DIRS = [
    os.path.join(PROJECT_ROOT, "Reels"),
    os.path.join(PROJECT_ROOT, "reels"),
    os.path.join(PROJECT_ROOT, "backend", "reels"),
]

SUPPORTED_EXTENSIONS = (".mp4", ".mov", ".webm", ".m4v")

_SCANNED_REELS_CACHE: Optional[List[Dict[str, Any]]] = None
_REEL_FILE_MAP: Dict[str, str] = {}


def find_reels_directory() -> Optional[str]:
    for p in POSSIBLE_REELS_DIRS:
        if os.path.exists(p) and os.path.isdir(p):
            return p
    return None


def normalize_folder_category(folder_name: str) -> str:
    """
    Normalizes folder names into single canonical taxonomy categories.
    Used ONLY as ground truth for dataset evaluation.
    """
    f_lower = folder_name.lower().replace("-", "_").strip()
    if "dsa" in f_lower or "algo" in f_lower:
        return "DSA"
    elif "funny" in f_lower or "comedy" in f_lower or "meme" in f_lower or "entertainment" in f_lower:
        return "Entertainment"
    elif "motivation" in f_lower or "inspire" in f_lower or "mindset" in f_lower:
        return "Motivational"
    elif "prog" in f_lower or "code" in f_lower or "language" in f_lower or "java" in f_lower or "python" in f_lower:
        return "Programming"
    elif "ai" in f_lower or "ml" in f_lower or "data" in f_lower:
        return "AI / ML"
    elif "hardware" in f_lower or "gpu" in f_lower or "chip" in f_lower:
        return "Hardware"
    elif "gaming" in f_lower or "game" in f_lower:
        return "Gaming"
    elif "system" in f_lower or "design" in f_lower or "arch" in f_lower:
        return "System Design"
    elif "career" in f_lower or "interview" in f_lower:
        return "Career"
    elif "cyber" in f_lower or "security" in f_lower:
        return "Cybersecurity"
    elif "cloud" in f_lower or "devops" in f_lower:
        return "Cloud"
    return "Other"


def discover_all_video_files() -> List[Dict[str, str]]:
    reels_root = find_reels_directory()
    if not reels_root:
        return []

    discovered = []
    for root, dirs, files in os.walk(reels_root):
        dirs.sort()
        for f in sorted(files):
            if any(f.lower().endswith(ext) for ext in SUPPORTED_EXTENSIONS) and not f.startswith("."):
                full_path = os.path.join(root, f)
                parent_folder = os.path.basename(root)
                source_folder = parent_folder if parent_folder != os.path.basename(reels_root) else "general"
                discovered.append({
                    "full_path": full_path,
                    "filename": f,
                    "source_folder": source_folder,
                    "dataset_label": normalize_folder_category(source_folder)
                })

    return discovered


def get_reel_file_by_id(reel_id: str) -> Optional[str]:
    global _REEL_FILE_MAP
    if reel_id in _REEL_FILE_MAP and os.path.exists(_REEL_FILE_MAP[reel_id]):
        return _REEL_FILE_MAP[reel_id]

    reels = scan_multimodal_dataset()
    for r in reels:
        if r["id"] == reel_id and os.path.exists(r.get("filepath", "")):
            return r["filepath"]
    return None


def scan_multimodal_dataset(force_refresh: bool = False) -> List[Dict[str, Any]]:
    """
    Scans all categorized video files, performs independent video understanding,
    and returns dataset items with explicit DATASET LABEL vs AI PREDICTION vs CONSISTENCY STATUS.
    """
    global _SCANNED_REELS_CACHE, _REEL_FILE_MAP
    if _SCANNED_REELS_CACHE is not None and not force_refresh:
        return _SCANNED_REELS_CACHE

    video_items = discover_all_video_files()
    if not video_items:
        return []

    scanned_reels = []
    _REEL_FILE_MAP.clear()

    for idx, item in enumerate(video_items):
        filepath = item["full_path"]
        filename = item["filename"]
        source_folder = item["source_folder"]
        dataset_label = item["dataset_label"]
        reel_id = f"real_reel_{idx + 1:02d}"
        _REEL_FILE_MAP[reel_id] = filepath

        # Perform genuine AI video analysis (WITHOUT passing dataset_label or folder to model)
        analysis = analyze_video_file(filepath)

        predicted_cat = analysis.get("primaryCategory") or analysis.get("predicted_category") or "Programming"
        content_type = analysis.get("contentType") or "Educational"
        topics = analysis.get("topics") or [predicted_cat]
        summary = analysis.get("summary") or analysis.get("video_summary") or "Short-form video analyzed in TechLens Lab."
        key_moments = analysis.get("keyMoments") or analysis.get("key_moments") or []
        evidence_scores = analysis.get("evidence_scores") or {"visual": 75, "ocr": 80, "speech": 85, "semantic": 80}

        tech_depth = int(analysis.get("technicalDepth", 80))
        edu_val = int(analysis.get("educationalValue", 80))
        ent_val = int(analysis.get("entertainmentValue", 40))
        mot_level = int(analysis.get("motivationLevel", 40))
        hype_risk = int(analysis.get("hypeRisk", 5))
        conf_score = int(analysis.get("confidence", 85))

        duration = float(analysis.get("metadata", {}).get("duration", 45.0))
        width = int(analysis.get("metadata", {}).get("width", 720))
        height = int(analysis.get("metadata", {}).get("height", 1280))
        fps = float(analysis.get("metadata", {}).get("fps", 30.0))

        # Automatic Label Consistency Check (Concept A vs Concept B)
        is_match = (predicted_cat.lower() == dataset_label.lower())
        label_status = "MATCH" if is_match else "CONFLICT"
        if is_match:
            consistency_explanation = f"Dataset label and AI multimodal analysis both agree on {predicted_cat}."
        else:
            consistency_explanation = f"Dataset label says {dataset_label}, but multimodal analysis detected {predicted_cat} ({content_type}) content."

        # LAYER A: Content Classification
        content_identity = {
            "datasetLabel": dataset_label,
            "expectedCategory": dataset_label,
            "sourceFolder": source_folder,
            "predictedCategory": predicted_cat,
            "category": predicted_cat,
            "contentType": content_type,
            "content_type": content_type,
            "topics": topics,
            "primary_tag": predicted_cat,
            "secondary_tags": analysis.get("secondaryCategories", []),
            "labelStatus": label_status,
            "groundTruthMatch": "PASS" if is_match else "REVIEW",
            "consistencyExplanation": consistency_explanation,
            "aiConfidence": conf_score,
            "evidenceScores": evidence_scores,
        }

        # LAYER B: Contribution to user behavioral profile
        interest_contribution: Dict[str, float] = {}
        if predicted_cat in ["Programming", "DSA", "System Design", "Developer Tools", "Java"]:
            interest_contribution["Software Engineering"] = 0.85
            interest_contribution[predicted_cat] = 0.90
        elif predicted_cat in ["AI / ML", "AI"]:
            interest_contribution["AI / ML Engineering"] = 0.95
            interest_contribution["Programming"] = 0.70
        elif predicted_cat in ["Gaming", "Hardware"]:
            interest_contribution["Gaming Technology / Hardware"] = 0.90
            interest_contribution[predicted_cat] = 0.85
        elif predicted_cat in ["Motivational", "Career"]:
            interest_contribution["Career & Engineering Mindset"] = 0.90
            interest_contribution["Software Engineering"] = 0.60
        elif predicted_cat in ["Entertainment", "Comedy"]:
            interest_contribution["Technology Entertainment"] = 0.90
            interest_contribution["Developer Culture"] = 0.75
        else:
            interest_contribution["Software Engineering"] = 0.80

        multimodal_evidence = {
            "visual_detected": analysis.get("visualEvidence", ["Screen"]),
            "audio_transcript": analysis.get("audioEvidence", ["Spoken narration"])[0] if analysis.get("audioEvidence") else "Spoken narration",
            "ocr_keywords": analysis.get("textEvidence", ["TECH"]),
            "key_moments": key_moments,
            "technical_depth": tech_depth / 100.0,
            "learning_value": edu_val / 100.0,
            "entertainment_value": ent_val / 100.0,
            "motivation_level": mot_level / 100.0,
            "hype_risk": hype_risk / 100.0,
            "difficulty": "Advanced" if tech_depth > 88 else ("Intermediate" if tech_depth > 60 else "Beginner"),
            "model_used": analysis.get("modelUsed", "TechLens Multimodal Engine"),
            "fallback_model": analysis.get("fallbackModel", "None"),
            "processing_time_seconds": analysis.get("processingTimeSeconds", 0.05),
            "evidence_scores": evidence_scores,
        }

        reel_item = {
            "id": reel_id,
            "index": idx + 1,
            "filename": filename,
            "filepath": filepath,
            "sourceFolder": source_folder,
            "source_folder": source_folder,
            "datasetLabel": dataset_label,
            "dataset_label": dataset_label,
            "expectedCategory": dataset_label,
            "expected_category": dataset_label,
            "predictedCategory": predicted_cat,
            "predicted_category": predicted_cat,
            "labelStatus": label_status,
            "label_status": label_status,
            "groundTruthMatch": "PASS" if is_match else "REVIEW",
            "ground_truth_match": "PASS" if is_match else "REVIEW",
            "consistencyExplanation": consistency_explanation,
            "aiConfidence": conf_score,
            "evidenceScores": evidence_scores,
            "file_hash": analysis.get("file_hash", f"hash_{idx}"),
            "video_url": f"/api/experiment/video/{reel_id}",
            "title": f"Reel #{idx + 1:02d}: {predicted_cat}",
            "content_identity": content_identity,
            "interest_contribution": interest_contribution,
            "multimodal_evidence": multimodal_evidence,
            "generated_description": summary,
            "summary": summary,
            "video_summary": summary,
            "detected_topics": topics,
            "topics": topics,
            "primaryCategory": predicted_cat,
            "category": predicted_cat,
            "contentType": content_type,
            "content_type": content_type,
            "content_confidence": analysis.get("confidence_tier", "HIGH"),
            "key_moments": key_moments,
            "keyMoments": key_moments,
            "topic": predicted_cat,
            "subtopic": analysis.get("secondaryCategories", ["General"])[0] if analysis.get("secondaryCategories") else "General",
            "technical_depth": tech_depth,
            "technicalDepth": tech_depth,
            "educational_value": edu_val,
            "educationalValue": edu_val,
            "educational_depth": edu_val / 100.0,
            "entertainment_value": ent_val,
            "entertainmentValue": ent_val,
            "motivation_level": mot_level,
            "motivationLevel": mot_level,
            "hype_score": hype_risk / 100.0,
            "hypeRisk": hype_risk,
            "difficulty": multimodal_evidence["difficulty"],
            "career_relevance": 0.88 if predicted_cat in ["Programming", "System Design", "DSA", "Developer Tools"] else 0.45,
            "duration": duration,
            "width": width,
            "height": height,
            "fps": fps,
            "description": summary,
            "thumbnail_color": "#8b5cf6" if dataset_label == "DSA" else ("#10b981" if dataset_label == "Programming" else ("#f59e0b" if dataset_label == "Motivational" else "#ec4899")),
        }
        scanned_reels.append(reel_item)

    _SCANNED_REELS_CACHE = scanned_reels
    return scanned_reels


# ─── GROUND-TRUTH CONTENT EVALUATION METRICS ───

def compute_classification_evaluation() -> Dict[str, Any]:
    """
    Computes rigorous dataset evaluation metrics:
    - Matches vs Conflicts
    - Precision, Recall, F1 per category
    - Full sample audit records with evidence scores and explanations.
    """
    reels = scan_multimodal_dataset()
    categories = ["DSA", "Programming", "Entertainment", "Motivational", "AI / ML", "Hardware", "System Design"]
    
    total = len(reels)
    matches_count = 0
    conflicts_count = 0
    confidence_sum = 0

    matrix = {c: {c2: 0 for c2 in categories} for c in categories}
    tp = {c: 0 for c in categories}
    fp = {c: 0 for c in categories}
    fn = {c: 0 for c in categories}
    sample_records = []

    for r in reels:
        expected = r["datasetLabel"]
        pred = r["predictedCategory"]
        conf = r["aiConfidence"]
        confidence_sum += conf

        is_match = (expected == pred)
        if is_match:
            matches_count += 1
        else:
            conflicts_count += 1

        sample_records.append({
            "id": r["id"],
            "filename": r["filename"],
            "sourceFolder": r["sourceFolder"],
            "datasetLabel": expected,
            "predictedCategory": pred,
            "contentType": r["contentType"],
            "aiConfidence": conf,
            "evidenceScores": r.get("evidenceScores", {}),
            "labelStatus": "MATCH" if is_match else "CONFLICT",
            "explanation": r["consistencyExplanation"],
        })

        if expected in matrix and pred in matrix[expected]:
            matrix[expected][pred] += 1
            if is_match:
                tp[expected] += 1
            else:
                fp[pred] += 1
                fn[expected] += 1

    per_category = {}
    f1_list = []
    for c in categories:
        actual_count = sum(matrix[c].values())
        pred_count = sum(matrix[row][c] for row in categories)
        precision = round((tp[c] / pred_count) if pred_count > 0 else 0.0, 2)
        recall = round((tp[c] / actual_count) if actual_count > 0 else 0.0, 2)
        f1 = round((2 * precision * recall / (precision + recall)) if (precision + recall) > 0 else 0.0, 2)
        if actual_count > 0:
            f1_list.append(f1)
        per_category[c] = {
            "samples": actual_count,
            "precision": precision,
            "recall": recall,
            "f1_score": f1
        }

    agreement_rate = round((matches_count / max(total, 1)) * 100, 1)
    macro_f1 = round((sum(f1_list) / max(len(f1_list), 1)), 2)
    avg_confidence = round(confidence_sum / max(total, 1), 1)

    return {
        "total_evaluated": total,
        "matches_count": matches_count,
        "conflicts_count": conflicts_count,
        "agreement_rate": agreement_rate,
        "macro_f1": macro_f1,
        "average_confidence": avg_confidence,
        "categories": categories,
        "per_category": per_category,
        "confusion_matrix": matrix,
        "sample_records": sample_records,
    }
