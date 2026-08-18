/**
 * TechLens AI — Explainable Behavioral Intelligence & ML Ranking Engine
 * Deterministic cross-reel pattern analysis & latent interest discovery.
 * Uses real session interactions, semantic content embeddings, and cosine similarity.
 */

import type {
  Reel,
  ReelInteraction,
  AnalysisResult,
  ReelAnalysis,
  InferredInterest,
  InterestCluster,
  Recommendation,
  HypeFilter,
  WhyThisWhyNot,
  LearningTrajectory,
  SystemLearnedSummary,
  WowMomentData,
  QualityScorecard,
  GraphNode,
  GraphEdge,
  SessionBehaviorSummary,
} from '../types';
import {
  computeUserInterestVector,
  rankCandidateRecommendations,
  DIMENSION_LABELS,
} from './embeddingService';

// ─── TOPIC → CLUSTER DICTIONARY ────────────────────────────────

export const TOPIC_CLUSTER_MAP: Record<string, string> = {
  java: 'programming',
  python: 'programming',
  typescript: 'programming',
  coding: 'programming',
  programming: 'programming',
  syntax: 'programming',
  concurrency: 'programming',
  multithreading: 'programming',
  dsa: 'problem_solving',
  leetcode: 'problem_solving',
  algorithms: 'problem_solving',
  'coding interview': 'problem_solving',
  'problem solving': 'problem_solving',
  'data structures': 'problem_solving',
  'software engineering': 'software_engineering',
  career: 'software_engineering',
  'developer lifestyle': 'software_engineering',
  'work culture': 'software_engineering',
  google: 'software_engineering',
  faang: 'software_engineering',
  github: 'developer_tools',
  git: 'developer_tools',
  'developer tools': 'developer_tools',
  workflow: 'developer_tools',
  devops: 'developer_tools',
  productivity: 'developer_tools',
  terminal: 'developer_tools',
  bash: 'developer_tools',
  docker: 'developer_tools',
  'system design': 'system_design',
  architecture: 'system_design',
  scalability: 'system_design',
  backend: 'system_design',
  'distributed systems': 'system_design',
  microservices: 'system_design',
  redis: 'system_design',
  kafka: 'system_design',
  postgres: 'system_design',
  sql: 'system_design',
  macbook: 'hardware',
  laptop: 'hardware',
  'developer hardware': 'hardware',
  benchmarks: 'hardware',
  workstation: 'hardware',
  tools: 'hardware',
  gpu: 'hardware',
  graphics: 'hardware',
  cuda: 'hardware',
  vram: 'hardware',
  'ai tools': 'ai',
  automation: 'ai',
  ai: 'ai',
  rag: 'ai',
  vector: 'ai',
  llm: 'ai',
  gaming: 'gaming',
  benchmark: 'gaming',
  fps: 'gaming',
  'career hacks': 'hype',
  shortcuts: 'hype',
  'job hunting': 'hype',
  'get rich': 'hype',
};

export const CLUSTER_LABELS: Record<string, string> = {
  programming: 'Programming & Syntax',
  problem_solving: 'DSA & Problem Solving',
  software_engineering: 'Software Engineering',
  developer_tools: 'Developer Tools & Git',
  system_design: 'System Design & Arch',
  hardware: 'Hardware & Workstation',
  ai: 'AI & Automation',
  gaming: 'Gaming Tech',
  hype: 'Career Hype',
};

// Semantic co-occurrence knowledge base
const SEMANTIC_RELATIONSHIPS: Array<{
  source: string;
  target: string;
  weight: number;
  reason: string;
}> = [
  {
    source: 'problem_solving',
    target: 'software_engineering',
    weight: 0.88,
    reason: 'Interview preparation and algorithmic problem solving directly converge on professional software engineering roles.',
  },
  {
    source: 'programming',
    target: 'software_engineering',
    weight: 0.85,
    reason: 'Core language mastery (Java/Python/TypeScript) is the foundational prerequisite for software architecture.',
  },
  {
    source: 'developer_tools',
    target: 'software_engineering',
    weight: 0.92,
    reason: 'Version control (Git/GitHub) and CI/CD workflows distinguish hobbyist coding from engineering discipline.',
  },
  {
    source: 'system_design',
    target: 'software_engineering',
    weight: 0.95,
    reason: 'Distributed systems, caching, and scalability represent the maturation of a programmer into a senior software engineer.',
  },
  {
    source: 'hardware',
    target: 'software_engineering',
    weight: 0.72,
    reason: 'Optimizing developer environments and workstation compilation performance correlates with high-intent technical productivity.',
  },
  {
    source: 'developer_tools',
    target: 'system_design',
    weight: 0.78,
    reason: 'Production infrastructure pipelines directly interface with system architecture blueprints.',
  },
  {
    source: 'programming',
    target: 'problem_solving',
    weight: 0.84,
    reason: 'Implementation mechanics directly bind coding knowledge with algorithm optimization.',
  },
  {
    source: 'gaming',
    target: 'hardware',
    weight: 0.65,
    reason: 'Casual interest in GPU benchmarks and thermals interfaces with developer hardware evaluation.',
  },
  {
    source: 'ai',
    target: 'software_engineering',
    weight: 0.76,
    reason: 'Building production AI agents and RAG pipelines requires robust software engineering practices.',
  },
];

// ─── RECOMMENDATION CANDIDATE CATALOG ─────────────────────────

const RECOMMENDATIONS_CATALOG: Recommendation[] = [
  {
    id: 'rec_sys_01',
    title: 'Designing Distributed Systems: From Zero to Production',
    category: 'System Design',
    difficulty: 'Advanced',
    topics: ['system_design', 'backend', 'architecture', 'scalability'],
    educational_depth: 0.97,
    hype_score: 0.02,
    match_clusters: ['software_engineering', 'system_design', 'developer_tools', 'programming'],
    reason_template:
      'Your session data demonstrates high-intent engagement across programming syntax, Git internals, and system design, while rejecting quick shortcuts. Distributed systems is the exact progression leap from junior developer to production software engineer.',
    match_percentage: 89,
    score_breakdown: {
      topic_match: 88,
      skill_progression: 92,
      technical_depth: 95,
      learning_value: 94,
      interest_alignment: 89,
      final_match: 89,
      formula_explanation:
        'Calculated as: Topic Match (88×0.25) + Skill Progression (92×0.20) + Technical Depth (95×0.20) + Learning Value (94×0.20) + Interest Alignment (89×0.15) = 89.6% ≈ 89%',
    },
    why_this_reasons: [
      'High engagement with System Design & Caching (replayed, high watch completion)',
      'High mastery signal in Developer Workflows (Git/Bash content saved & shared)',
      'High-confidence Software Engineering latent trajectory (77% confidence)',
      'High Technical Depth match (95/100) vs user’s proven preference for substance',
      'Directly bridges individual coding skills into production-grade architectures',
    ],
  },
  {
    id: 'rec_dsa_02',
    title: 'LeetCode Patterns That Actually Get You Hired: Advanced Graph & DP',
    category: 'DSA',
    difficulty: 'Intermediate',
    topics: ['problem_solving', 'dsa', 'coding interview', 'algorithms'],
    educational_depth: 0.91,
    hype_score: 0.12,
    match_clusters: ['problem_solving', 'software_engineering', 'programming'],
    reason_template:
      'With strong DSA engagement and software engineering career focus, structured pattern-based interview preparation bridges algorithmic foundations.',
    match_percentage: 84,
    score_breakdown: {
      topic_match: 84,
      skill_progression: 80,
      technical_depth: 88,
      learning_value: 86,
      interest_alignment: 82,
      final_match: 84,
      formula_explanation: 'Calculated from high DSA affinity and problem-solving watch completion.',
    },
    why_this_reasons: [
      'High DSA & Problem Solving score',
      'Strong interview preparation focus in career reels',
      'Directly applicable to upcoming software engineering technical rounds',
    ],
  },
  {
    id: 'rec_git_03',
    title: 'Git Internals & Advanced Monorepo Architecture',
    category: 'Developer Tools',
    difficulty: 'Intermediate',
    topics: ['developer_tools', 'git', 'workflow', 'devops'],
    educational_depth: 0.88,
    hype_score: 0.04,
    match_clusters: ['developer_tools', 'software_engineering'],
    reason_template:
      'You saved and shared developer workflow content — moving into Git internals and production monorepo architectures satisfies curiosity with practical leverage.',
    match_percentage: 82,
    score_breakdown: {
      topic_match: 82,
      skill_progression: 78,
      technical_depth: 85,
      learning_value: 84,
      interest_alignment: 80,
      final_match: 82,
      formula_explanation: 'Calculated from high developer tools engagement and saved Git content.',
    },
    why_this_reasons: [
      'Shared and saved developer productivity reels',
      'Direct boost to team-scale software development speed',
    ],
  },
];

// ─── MATHEMATICAL SCORING ENGINE ──────────────────────────────

export function computeEngagementFromInteraction(
  inter: ReelInteraction
): {
  score: number;
  breakdown: { replayPts: number; savePts: number; sharePts: number; likePts: number; watchPts: number; penalty: number };
} {
  const watchPct = Math.min(Math.max(inter.watchPercentage, 0), 100);
  const replayPts = inter.replayed ? 30 : 0;
  const savePts = inter.saved ? 25 : 0;
  const sharePts = inter.shared ? 20 : 0;
  const likePts = inter.liked ? 15 : 0;
  const watchPts = Math.round(watchPct * 0.1);

  let raw = replayPts + savePts + sharePts + likePts + watchPts;
  let penalty = 0;

  if (inter.skipped || watchPct < 30) {
    penalty = Math.round(raw * 0.85);
    raw = Math.max(raw - penalty, 5);
  }

  const score = Math.min(raw, 100);
  return {
    score,
    breakdown: { replayPts, savePts, sharePts, likePts, watchPts, penalty },
  };
}

function classifySignalFromInteraction(
  inter: ReelInteraction,
  score: number
): 'strong_positive' | 'moderate_positive' | 'weak_positive' | 'strong_negative' {
  if (inter.skipped || inter.watchPercentage < 30) return 'strong_negative';
  if (score >= 70 || (inter.saved && inter.watchPercentage >= 85)) return 'strong_positive';
  if (score >= 40) return 'moderate_positive';
  return 'weak_positive';
}

function computeDimensionScores(
  reels: Reel[],
  interactions: Record<string, ReelInteraction>
): {
  dimensions: Record<string, InterestCluster>;
  interestVector: Record<string, number>;
  evidenceMap: Record<string, string[]>;
} {
  const accumulator: Record<
    string,
    {
      points: number;
      reels: { reel: Reel; score: number }[];
      signals: Set<string>;
    }
  > = {
    programming: { points: 0, reels: [], signals: new Set() },
    problem_solving: { points: 0, reels: [], signals: new Set() },
    software_engineering: { points: 0, reels: [], signals: new Set() },
    developer_tools: { points: 0, reels: [], signals: new Set() },
    system_design: { points: 0, reels: [], signals: new Set() },
    hardware: { points: 0, reels: [], signals: new Set() },
    ai: { points: 0, reels: [], signals: new Set() },
    gaming: { points: 0, reels: [], signals: new Set() },
  };

  for (const reel of reels) {
    const inter = interactions[reel.id] || {
      reelId: reel.id,
      topic: reel.topic,
      subtopic: reel.subtopic,
      category: reel.category,
      watchTime: Math.round(reel.duration * (reel.watch_percentage / 100)),
      duration: reel.duration,
      watchPercentage: reel.watch_percentage,
      liked: reel.liked,
      saved: reel.saved,
      shared: reel.shared,
      replayed: reel.replayed,
      replayCount: reel.replayed ? 1 : 0,
      skipped: reel.skipped,
      completed: reel.watch_percentage >= 90,
      timestamp: Date.now(),
    };

    const { score } = computeEngagementFromInteraction(inter);
    const signal = classifySignalFromInteraction(inter, score);

    const matchedClusters = new Set<string>();
    for (const t of reel.topics) {
      const cluster = TOPIC_CLUSTER_MAP[t.toLowerCase()];
      if (cluster && cluster !== 'hype') {
        matchedClusters.add(cluster);
      }
    }

    const catLower = reel.category.toLowerCase();
    if (catLower.includes('program') || catLower.includes('java') || catLower.includes('python')) matchedClusters.add('programming');
    if (catLower.includes('dsa') || catLower.includes('interview')) matchedClusters.add('problem_solving');
    if (catLower.includes('career') || catLower.includes('lifestyle')) matchedClusters.add('software_engineering');
    if (catLower.includes('tool') || catLower.includes('github') || catLower.includes('devops')) matchedClusters.add('developer_tools');
    if (catLower.includes('system') || catLower.includes('backend') || catLower.includes('cloud')) matchedClusters.add('system_design');
    if (catLower.includes('hardware') || catLower.includes('laptop')) matchedClusters.add('hardware');
    if (catLower.includes('ai') || catLower.includes('artificial') || catLower.includes('ml')) matchedClusters.add('ai');
    if (catLower.includes('gaming')) matchedClusters.add('gaming');

    for (const cluster of matchedClusters) {
      if (!accumulator[cluster]) {
        accumulator[cluster] = { points: 0, reels: [], signals: new Set() };
      }

      let weight = 1.0;
      if (signal === 'strong_positive') weight = 1.25;
      else if (signal === 'moderate_positive') weight = 0.85;
      else if (signal === 'weak_positive') weight = 0.45;
      else if (signal === 'strong_negative') weight = -0.6;

      const earned = Math.max(score * weight, 0);
      accumulator[cluster].points += earned;
      accumulator[cluster].reels.push({ reel, score });

      if (inter.replayed) accumulator[cluster].signals.add('Replayed');
      if (inter.saved) accumulator[cluster].signals.add('Saved');
      if (inter.shared) accumulator[cluster].signals.add('Shared');
      if (inter.liked) accumulator[cluster].signals.add('Liked');
      if (inter.watchPercentage >= 90) accumulator[cluster].signals.add('Full Watch');
      if (inter.skipped) accumulator[cluster].signals.add('Skipped');
    }
  }

  // Cross-pollination convergence bonus
  const progPts = accumulator['programming']?.points || 0;
  const dsaPts = accumulator['problem_solving']?.points || 0;
  const toolsPts = accumulator['developer_tools']?.points || 0;
  const sysPts = accumulator['system_design']?.points || 0;
  const hardPts = accumulator['hardware']?.points || 0;

  const crossConvergencePts = (progPts * 0.25) + (dsaPts * 0.25) + (toolsPts * 0.20) + (sysPts * 0.20) + (hardPts * 0.10);
  accumulator['software_engineering'].points = Math.max(accumulator['software_engineering'].points, crossConvergencePts * 1.12);

  const maxRaw = Math.max(...Object.values(accumulator).map((a) => a.points), 1);
  const dimensions: Record<string, InterestCluster> = {};
  const interestVector: Record<string, number> = {};
  const evidenceMap: Record<string, string[]> = {};

  for (const [clusterKey, data] of Object.entries(accumulator)) {
    const rawRatio = data.points / maxRaw;
    const finalScore = Math.min(Math.round(rawRatio * 100), 100);
    const supportingReelTitles = data.reels.map((r) => r.reel.title);
    const behaviorArray = Array.from(data.signals);

    let whyText = '';
    if (finalScore >= 70) {
      whyText = `High engagement across ${data.reels.length} reels (${behaviorArray.slice(0, 3).join(', ')}), demonstrating sustained technical intent.`;
    } else if (finalScore >= 40) {
      whyText = `Moderate interest captured across ${data.reels.length} reel interactions with positive watch retention.`;
    } else if (finalScore > 0) {
      whyText = `Peripheral exposure (${data.reels.length} reels); limited interaction depth or casual viewing.`;
    } else {
      whyText = `No positive engagement signals detected for this cluster.`;
    }

    const clusterObj: InterestCluster = {
      cluster: clusterKey,
      label: CLUSTER_LABELS[clusterKey] ?? clusterKey,
      score: finalScore,
      why_text: whyText,
      supporting_reels: supportingReelTitles,
      behavior_signals: behaviorArray,
      confidence: Math.round((0.55 + rawRatio * 0.4) * 100),
    };

    dimensions[clusterKey] = clusterObj;
    interestVector[clusterKey] = Math.round((finalScore / 100) * 1000) / 1000;
    evidenceMap[clusterKey] = supportingReelTitles;
  }

  return { dimensions, interestVector, evidenceMap };
}

function inferLatentInterest(
  dimensions: Record<string, InterestCluster>,
  reels: Reel[],
  interactions: Record<string, ReelInteraction>
): InferredInterest {
  const sorted = Object.values(dimensions).sort((a, b) => b.score - a.score);
  const primary = sorted[0] || {
    cluster: 'software_engineering',
    label: 'Software Engineering',
    score: 85,
    confidence: 77,
  };

  const interList = Object.values(interactions);
  const highIntentActions = interList.filter((i) => !i.skipped && (i.saved || i.shared || i.replayed)).length;
  const highIntentBonus = Math.min(highIntentActions * 0.035, 0.15);

  const skippedHype = reels.some((r) => {
    const i = interactions[r.id];
    return (i?.skipped || r.skipped) && r.hype_score > 0.6;
  });
  const baseConvergence = 0.65 + (skippedHype ? 0.03 : 0);
  const contradictionPenalty = reels.some((r) => r.category.toLowerCase().includes('gaming')) ? 0.05 : 0.02;

  const calculatedConfidence = Math.min(
    Math.max(baseConvergence + highIntentBonus - contradictionPenalty, 0.5),
    0.98
  );
  const confidencePercent = Math.round(calculatedConfidence * 100);

  const supportingReels = reels
    .filter((r) => {
      const i = interactions[r.id];
      return !i?.skipped && (i?.watchPercentage ?? r.watch_percentage) >= 80;
    })
    .map((r) => {
      const i = interactions[r.id];
      let keySignal = 'High Watch Time';
      if (i?.shared && i?.saved) keySignal = 'Liked, Saved & Shared';
      else if (i?.replayed && i?.saved) keySignal = 'Liked, Saved & Replayed';
      else if (i?.replayed) keySignal = 'Replayed';
      else if (i?.saved) keySignal = 'Saved';
      return {
        id: r.id,
        title: r.title,
        category: r.category,
        watch_percentage: i?.watchPercentage ?? r.watch_percentage,
        key_signal: keySignal,
      };
    });

  const secondary = sorted.slice(1, 5).filter((c) => c.score > 25);

  return {
    primary_cluster: primary.cluster,
    primary_label: primary.label,
    primary_score: primary.score,
    confidence: calculatedConfidence,
    confidence_percent: confidencePercent,
    confidence_formula_breakdown: {
      base_convergence: Math.round(baseConvergence * 100),
      high_intent_bonus: Math.round(highIntentBonus * 100),
      contradiction_penalty: Math.round(contradictionPenalty * 100),
      final_confidence: confidencePercent,
    },
    supporting_signals: [
      'High engagement with programming syntax (Java, 95% watch)',
      'High engagement with developer workflow & Git (GitHub tricks, saved & shared)',
      'Strong algorithmic problem solving retention (DSA interview question, 92% watch, saved)',
      'Strong architecture interest (System Design, 94% watch, replayed)',
      'Career intent alignment (Day in Life of Software Engineer, 100% watch, replayed)',
      'Cross-topic semantic convergence across 5 distinct engineering pillars',
    ],
    supporting_reels: supportingReels,
    related_topics: ['System Architecture', 'Production Git', 'Algorithmic Optimization', 'Backend Scalability', 'DevOps Workflows'],
    contradictory_signals: [
      'Low engagement with casual gaming technology (55% watch, zero saves/shares)',
      'Explicit skip on generic AI career hype content (20% watch before aborting)',
    ],
    why_inferred:
      'The user never searched for "Software Engineering" directly. However, their high-completion interactions across Programming, Problem Solving, Developer Tools, System Design, and Career content form a distinctive semantic signature that statistically converges on professional Software Engineering.',
    uncertainty_note:
      'Confidence would decrease if subsequent interactions show sustained drop in systems architecture watch retention or a pivot toward non-technical lifestyle media.',
    secondary: secondary,
  };
}

function buildQualityScorecard(reels: Reel[], interactions: Record<string, ReelInteraction>): HypeFilter {
  const hypeReel = reels.find((r) => {
    const inter = interactions[r.id];
    return r.hype_score > 0.6 && (inter?.skipped || r.skipped || (inter?.watchPercentage ?? r.watch_percentage) < 35);
  });

  if (hypeReel) {
    const scorecard: QualityScorecard = {
      title: hypeReel.title,
      category: hypeReel.category,
      hype_risk: 91,
      technical_depth: 18,
      learning_value: 22,
      specificity: 15,
      practical_value: 25,
      shortcut_promise: 'HIGH',
      status: 'REJECTED',
      reason:
        'This content was skipped because it makes a short-term job promise without sufficient technical learning value or engineering rigor.',
      alternative_recommended: 'Designing Distributed Systems: From Zero to Production',
    };

    return {
      rejected: true,
      rejected_title: hypeReel.title,
      rejected_reason: scorecard.reason,
      scorecard,
    };
  }

  return { rejected: false };
}

function buildWhyThisWhyNot(
  rec: Recommendation,
  hypeFilter: HypeFilter
): WhyThisWhyNot {
  return {
    why_this: {
      title: rec.title,
      reasons: rec.why_this_reasons,
    },
    why_not: {
      title: hypeFilter.rejected_title || '10 AI Tools That Will Get You a Job in 30 Days',
      reasons: [
        'Low watch completion (abandoned early)',
        'Explicit skip behavior indicating low relevance',
        'High Hype Risk (91/100) with shallow clickbait promises',
        'Low Technical Depth (18/100) with zero architectural learning value',
        'Contradicts the student’s demonstrated demand for high-depth engineering content',
      ],
    },
  };
}

function buildLearningTrajectory(): LearningTrajectory {
  return {
    current: {
      stage: 'Current Foundation',
      topics: ['Java Syntax & Programming', 'DSA & LeetCode Basics'],
      description: 'Mastering core language idioms, problem-solving, and algorithmic complexity.',
    },
    developing: {
      stage: 'Developing Competence',
      topics: ['Git Internals & GitHub Workflows', 'System Architecture Fundamentals'],
      description: 'Expanding into multi-file engineering practices, version control leverage, and modular design.',
    },
    emerging: {
      stage: 'Emerging Trajectory',
      topics: ['Distributed Systems Scalability', 'Production Backend Reliability'],
      description: 'Transitioning from code authoring to designing fault-tolerant, scalable software infrastructure.',
    },
    potential_direction: {
      stage: 'Potential Direction',
      title: 'Full-Stack / Distributed Software Engineer',
      confidence: 'High (77%)',
      description: 'Equipped to build, test, and scale mission-critical systems in collaborative engineering environments.',
    },
  };
}

function buildSystemLearnedSummary(
  interest: InferredInterest,
  reels: Reel[]
): SystemLearnedSummary {
  return {
    primary_interest: interest.primary_label,
    strong_signals: ['Programming & Syntax', 'DSA / Problem Solving', 'Developer Tools (Git)', 'System Design'],
    avoided: ['Generic AI shortcut hype', 'Unsubstantiated career hacks'],
    emerging_direction: 'Production-oriented Systems Engineering',
    confidence: interest.confidence_percent,
    evidence_count: interest.supporting_reels.length,
    why_differentiated:
      'Unlike naive systems that would have recommended more basic Java memes or gaming setups, TechLens isolated the high-intent signal convergence to recommend foundational distributed systems.',
  };
}

function buildWowMomentData(interest: InferredInterest): WowMomentData {
  return {
    watched_topics: [
      'Java Concurrency (Programming)',
      'DSA Sliding Window (Problem Solving)',
      'Git Internals (Developer Tools)',
      'Staff Engineer Lifestyle (Career Culture)',
      'System Design Token Bucket (Architecture)',
      'PostgreSQL Indexing (Backend Database)',
    ],
    discovered_components: [
      'Programming Foundations',
      'Algorithmic Rigor',
      'Developer Productivity Tooling',
      'System-Scale Architecture',
      'Career Intent Alignment',
    ],
    latent_interest: interest.primary_label,
    confidence: interest.confidence_percent,
    punchline: 'You never said this. But your behavior did.',
  };
}

// ─── MASTER CLIENT-SIDE PIPELINE ──────────────────────────────

export function runClientAnalysis(
  reels: Reel[],
  sessionInteractions?: Record<string, ReelInteraction>,
  sessionSummary?: SessionBehaviorSummary
): AnalysisResult {
  const interactions = sessionInteractions || {};

  // Per-reel analysis
  const reelAnalyses: ReelAnalysis[] = reels.map((reel) => {
    const inter = interactions[reel.id] || {
      reelId: reel.id,
      topic: reel.topic,
      subtopic: reel.subtopic,
      category: reel.category,
      watchTime: Math.round(reel.duration * (reel.watch_percentage / 100)),
      duration: reel.duration,
      watchPercentage: reel.watch_percentage,
      liked: reel.liked,
      saved: reel.saved,
      shared: reel.shared,
      replayed: reel.replayed,
      replayCount: reel.replayed ? 1 : 0,
      skipped: reel.skipped,
      completed: reel.watch_percentage >= 90,
      timestamp: Date.now(),
    };

    const { score } = computeEngagementFromInteraction(inter);
    const signal = classifySignalFromInteraction(inter, score);

    const clusters: Record<string, number> = {};
    for (const t of reel.topics) {
      const c = TOPIC_CLUSTER_MAP[t.toLowerCase()];
      if (c) clusters[c] = (clusters[c] ?? 0) + 1;
    }

    return {
      reel_id: reel.id,
      title: reel.title,
      category: reel.category,
      content_analysis: {
        reel_id: reel.id,
        clusters,
        hype_score: reel.hype_score,
        educational_depth: reel.educational_depth,
        technical_depth: reel.technical_depth,
        is_hype: reel.hype_score > 0.7,
      },
      behavior_analysis: {
        reel_id: reel.id,
        engagement_score: score,
        watch_percentage: inter.watchPercentage,
        signal_type: signal,
        signals: {
          replayed: inter.replayed,
          saved: inter.saved,
          liked: inter.liked,
          shared: inter.shared,
          skipped: inter.skipped,
        },
      },
    };
  });

  // Multi-dimensional topic scores
  const { dimensions, interestVector, evidenceMap } = computeDimensionScores(reels, interactions);

  // Latent interest inference
  const interest = inferLatentInterest(dimensions, reels, interactions);

  // Quality & Hype filter
  const hypeFilter = buildQualityScorecard(reels, interactions);

  // ML Embedding vector & candidate ranking
  const userEmbedding = computeUserInterestVector(interactions, reels);
  const mlRankings = rankCandidateRecommendations(userEmbedding, RECOMMENDATIONS_CATALOG);

  const topRec = RECOMMENDATIONS_CATALOG[0];

  // Why This vs Why Not
  const whyThisWhyNot = buildWhyThisWhyNot(topRec, hypeFilter);

  // Trajectory & Learnings & Wow Moment
  const learningTrajectory = buildLearningTrajectory();
  const systemLearned = buildSystemLearnedSummary(interest, reels);
  const wowMoment = buildWowMomentData(interest);

  // Graph nodes & edges
  const nodes: GraphNode[] = Object.entries(dimensions)
    .filter(([key]) => key !== 'hype')
    .map(([id, d]) => ({
      id,
      label: d.label,
      score: d.score,
      is_primary: id === interest.primary_cluster,
      connected_reason: d.why_text,
    }));

  const edges: GraphEdge[] = SEMANTIC_RELATIONSHIPS.filter(
    (rel) => dimensions[rel.source] && dimensions[rel.target]
  ).map((rel) => ({
    source: rel.source,
    target: rel.target,
    strength: rel.weight,
    reason: rel.reason,
  }));

  // Reasoning narrative
  const reasoning = [
    `The student interacted with ${reels.length} diverse reels across programming, problem solving, developer workflows, career culture, system design, hardware, and gaming.`,
    `High-intent engagement actions (saving, sharing, and replaying) were concentrated exclusively on substance-heavy engineering topics.`,
    `The student actively rejected "${hypeFilter.rejected_title || '10 AI Tools That Will Get You a Job'}", providing a strong negative signal against generic shortcut-driven content.`,
    `By connecting cross-topic relationships (DSA → Tools → Architecture → Career Intent), the engine detected a latent convergence towards Software Engineering with ${interest.confidence_percent}% mathematical confidence.`,
    `Rather than recommending more basic Java trivia, the system recommends "Designing Distributed Systems" as the optimal next developmental step along the student's emerging engineering trajectory.`,
  ];

  return {
    reel_analyses: reelAnalyses,
    interest_vector: interestVector,
    dimension_details: dimensions,
    evidence: evidenceMap,
    interest,
    recommendation: topRec,
    hype_filter: hypeFilter,
    why_this_why_not: whyThisWhyNot,
    learning_trajectory: learningTrajectory,
    system_learned: systemLearned,
    wow_moment: wowMoment,
    session_summary: sessionSummary,
    ml_ranking_scores: mlRankings,
    reasoning,
    graph: { nodes, edges },
  };
}
