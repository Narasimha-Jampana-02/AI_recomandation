import axios from 'axios';
import type { Reel, AnalysisResult, ReelInteraction, SessionBehaviorSummary } from '../types';
import { runClientAnalysis } from './analysisEngine';
import { INTERACTIVE_25_REELS } from '../data/interactiveReels';

const API_BASE = '/api';

export async function fetchReels(): Promise<Reel[]> {
  try {
    const response = await axios.get<Reel[]>(`${API_BASE}/reels`, { timeout: 3000 });
    if (Array.isArray(response.data) && response.data.length > 0) {
      return response.data;
    }
  } catch {
    // Graceful fallback to rich 25 reels dataset
  }
  return INTERACTIVE_25_REELS;
}

export async function analyzeReels(
  reels: Reel[],
  sessionInteractions?: Record<string, ReelInteraction>,
  sessionSummary?: SessionBehaviorSummary
): Promise<AnalysisResult> {
  try {
    const response = await axios.post<{ success: boolean; analysis: AnalysisResult }>(
      `${API_BASE}/analyze`,
      { reels, sessionInteractions, sessionSummary },
      { timeout: 5000 }
    );
    if (response.data?.success && response.data?.analysis) {
      return response.data.analysis;
    }
  } catch {
    // Seamless fallback to client-side ML engine
  }

  // Client-side deterministic execution
  return runClientAnalysis(reels, sessionInteractions, sessionSummary);
}

export async function checkBackendHealth(): Promise<boolean> {
  try {
    const response = await axios.get<{ status: string }>(`${API_BASE}/health`, { timeout: 2000 });
    return response.data?.status === 'healthy';
  } catch {
    return false;
  }
}
