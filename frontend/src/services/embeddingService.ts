/**
 * TechLens AI — ML Semantic Embedding & Ranking Layer
 * Implements content vectorization, user interest aggregation,
 * and cosine similarity candidate ranking.
 */

import type {
  Reel,
  ReelInteraction,
  EmbeddingVector,
  ContentEmbedding,
  MLRankingScore,
  Recommendation,
} from '../types';

// Key conceptual dimensions in the 8-dimensional semantic embedding space:
// [0: Programming, 1: Problem Solving/DSA, 2: Software Engineering, 3: Developer Tools/Git,
//  4: System Design/Arch, 5: Hardware/Systems, 6: AI/ML, 7: Gaming/Casual]
export const DIMENSION_LABELS = [
  'Programming',
  'Problem Solving',
  'Software Engineering',
  'Developer Tools',
  'System Design',
  'Hardware & Systems',
  'AI & ML',
  'Gaming Tech',
];

/**
 * Deterministic Semantic Embedding Provider
 * Generates an 8-D normalized semantic vector from reel metadata
 */
export class EmbeddingService {
  private static cache: Map<string, EmbeddingVector> = new Map();

  static generateEmbedding(reel: Reel): EmbeddingVector {
    if (this.cache.has(reel.id)) {
      return this.cache.get(reel.id)!;
    }

    const vector: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
    const text = `${reel.title} ${reel.description} ${reel.category} ${reel.topics.join(' ')}`.toLowerCase();

    // 0: Programming
    if (text.includes('java') || text.includes('python') || text.includes('typescript') || text.includes('syntax') || text.includes('code')) {
      vector[0] += 0.8;
    }
    // 1: Problem Solving / DSA
    if (text.includes('dsa') || text.includes('leetcode') || text.includes('algorithm') || text.includes('pointer') || text.includes('knapsack') || text.includes('graph')) {
      vector[1] += 0.9;
    }
    // 2: Software Engineering
    if (text.includes('software engineer') || text.includes('career') || text.includes('culture') || text.includes('team') || text.includes('production') || text.includes('review')) {
      vector[2] += 0.85;
    }
    // 3: Developer Tools / Git
    if (text.includes('git') || text.includes('github') || text.includes('bash') || text.includes('xargs') || text.includes('docker') || text.includes('terminal') || text.includes('workflow')) {
      vector[3] += 0.9;
    }
    // 4: System Design / Backend
    if (text.includes('system design') || text.includes('distributed') || text.includes('redis') || text.includes('kafka') || text.includes('sql') || text.includes('postgres') || text.includes('cache') || text.includes('concurrency')) {
      vector[4] += 0.95;
    }
    // 5: Hardware & Tech
    if (text.includes('macbook') || text.includes('hardware') || text.includes('gpu') || text.includes('vram') || text.includes('cuda') || text.includes('benchmark')) {
      vector[5] += 0.85;
    }
    // 6: AI & ML
    if (text.includes('ai') || text.includes('rag') || text.includes('vector') || text.includes('llm') || text.includes('machine learning')) {
      vector[6] += 0.85;
    }
    // 7: Gaming Tech
    if (text.includes('gaming') || text.includes('fps') || text.includes('oled') || text.includes('watercooling')) {
      vector[7] += 0.75;
    }

    // Downweight hype content in all technical dimensions
    if (reel.hype_score > 0.7) {
      for (let i = 0; i < vector.length; i++) {
        vector[i] *= 0.15;
      }
    }

    // Normalize to unit length
    const magnitude = Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0)) || 1.0;
    const normalized = vector.map((val) => Number((val / magnitude).toFixed(4)));

    this.cache.set(reel.id, normalized);
    return normalized;
  }

  static getCosineSimilarity(vecA: EmbeddingVector, vecB: EmbeddingVector): number {
    if (vecA.length !== vecB.length) return 0;
    let dot = 0;
    let normA = 0;
    let normB = 0;
    for (let i = 0; i < vecA.length; i++) {
      dot += vecA[i] * vecB[i];
      normA += vecA[i] * vecA[i];
      normB += vecB[i] * vecB[i];
    }
    const denom = Math.sqrt(normA) * Math.sqrt(normB);
    return denom === 0 ? 0 : Number((dot / denom).toFixed(4));
  }
}

/**
 * Construct the User's Dynamic Interest Vector from actual behavioral telemetry:
 * U_vector = Sum( ContentEmbedding_i * BehavioralWeight_i )
 */
export function computeUserInterestVector(
  interactions: Record<string, ReelInteraction>,
  reels: Reel[]
): EmbeddingVector {
  const reelMap = new Map(reels.map((r) => [r.id, r]));
  const accumulated = [0, 0, 0, 0, 0, 0, 0, 0];
  let totalWeight = 0;

  for (const [reelId, inter] of Object.entries(interactions)) {
    const reel = reelMap.get(reelId);
    if (!reel) continue;

    const embedding = EmbeddingService.generateEmbedding(reel);

    // Behavioral Weight Formula:
    // Watch% (0.10) + Replay (0.30) + Save (0.25) + Share (0.20) + Like (0.15) - Skip Penalty (0.85)
    const watchRatio = Math.min(Math.max(inter.watchPercentage / 100, 0), 1.0);
    const replayPts = inter.replayed ? 0.3 : 0;
    const savePts = inter.saved ? 0.25 : 0;
    const sharePts = inter.shared ? 0.2 : 0;
    const likePts = inter.liked ? 0.15 : 0;
    const watchPts = watchRatio * 0.1;

    let behaviorWeight = replayPts + savePts + sharePts + likePts + watchPts;

    if (inter.skipped || inter.watchPercentage < 30) {
      behaviorWeight *= 0.15; // 85% penalty on skipped items
    }

    totalWeight += behaviorWeight;

    for (let i = 0; i < accumulated.length; i++) {
      accumulated[i] += embedding[i] * behaviorWeight;
    }
  }

  // Cross-pillar convergence bonus:
  // If Programming (0), DSA (1), Tools (3), and System Design (4) all have positive mass,
  // synthesize a latent Software Engineering boost at index 2.
  if (accumulated[0] > 0.3 && accumulated[1] > 0.3 && accumulated[3] > 0.3 && accumulated[4] > 0.3) {
    accumulated[2] += (accumulated[0] + accumulated[1] + accumulated[3] + accumulated[4]) * 0.25;
  }

  const mag = Math.sqrt(accumulated.reduce((sum, val) => sum + val * val, 0)) || 1.0;
  return accumulated.map((val) => Number((val / mag).toFixed(4)));
}

/**
 * ML Candidate Ranking using Cosine Similarity & Multi-Factor Quality Guard
 */
export function rankCandidateRecommendations(
  userVector: EmbeddingVector,
  candidates: Recommendation[]
): MLRankingScore[] {
  // Candidate embeddings in the same 8-D space
  const candidateVectors: Record<string, EmbeddingVector> = {
    rec_sys_01: [0.35, 0.25, 0.45, 0.4, 0.65, 0.15, 0.1, 0.0], // Distributed Systems
    rec_dsa_02: [0.4, 0.75, 0.4, 0.1, 0.25, 0.05, 0.1, 0.0],  // Advanced DSA
    rec_git_03: [0.3, 0.1, 0.45, 0.75, 0.35, 0.15, 0.05, 0.0], // Git Internals
  };

  const scoredList: MLRankingScore[] = candidates.map((cand) => {
    const candVec = candidateVectors[cand.id] || [0.4, 0.4, 0.4, 0.4, 0.4, 0.1, 0.1, 0.0];
    const cosineSim = EmbeddingService.getCosineSimilarity(userVector, candVec);

    // Multi-factor quality score (0 to 1)
    const qualityScore = (cand.educational_depth * 0.5) + ((1 - cand.hype_score) * 0.5);

    // Final ML rank score = Cosine Sim (60%) + Quality Gate (40%)
    const finalScore = Number((cosineSim * 0.6 + qualityScore * 0.4).toFixed(4));

    return {
      candidateId: cand.id,
      title: cand.title,
      category: cand.category,
      cosineSimilarity: Math.round(cosineSim * 100),
      behaviorAlignment: Math.round(cosineSim * 95),
      qualityScore: Math.round(qualityScore * 100),
      finalRankScore: Math.round(finalScore * 100),
      reasons: cand.why_this_reasons,
    };
  });

  return scoredList.sort((a, b) => b.finalRankScore - a.finalRankScore);
}
