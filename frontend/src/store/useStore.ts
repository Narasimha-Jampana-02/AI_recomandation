import { create } from 'zustand';
import axios from 'axios';
import type {
  AppState,
  Reel,
  ReelInteraction,
  SessionBehaviorSummary,
  AnalysisResult,
  ExperimentReel,
  ExperimentInteraction,
  ExperimentSessionResult,
  ClassificationEvaluation,
  RobustnessTestResult,
  TestScenario,
} from '../types';
import { INTERACTIVE_25_REELS } from '../data/interactiveReels';
import { STATIC_EXPERIMENT_REELS, STATIC_EVALUATION_METRICS } from '../data/experimentReels';
import { DEFAULT_BEHAVIOR_WEIGHTS, BehaviorWeights } from '../config/behaviorWeights';
import { evaluateExperimentSession } from '../services/experimentEngine';

interface StoreActions {
  setSection: (section: AppState['section']) => void;
  setUser: (user: AppState['user']) => void;
  loginDemoUser: (email?: string, name?: string) => void;
  logoutDemoUser: () => void;
  setReels: (reels: Reel[]) => void;
  setActiveReelIndex: (index: number) => void;
  nextReel: () => void;
  prevReel: () => void;
  recordInteraction: (partial: Partial<ReelInteraction> & { reelId: string }) => void;
  updateReelInteraction: (partial: Partial<ReelInteraction> & { reelId: string }) => void;
  toggleLikeReel: (reelId: string) => void;
  toggleSaveReel: (reelId: string) => void;
  shareReel: (reelId: string) => void;
  replayReel: (reelId: string) => void;
  finalizeSessionSummary: () => SessionBehaviorSummary;
  setAnalysis: (analysis: AnalysisResult | null) => void;
  setIsAnalyzing: (isAnalyzing: boolean) => void;
  setError: (error: string | null) => void;
  setDemoMode: (isDemoMode: boolean) => void;
  setJudgeModalOpen: (isOpen: boolean) => void;
  setJudgeStep: (step: number) => void;
  addFeedback: (feedback: { recommendationId: string; feedbackType: any; timestamp: number }) => void;
  setSelectedDimension: (dimension: string | null) => void;
  setEvidenceDrawerOpen: (isOpen: boolean) => void;
  resetAll: () => void;

  // Real-World Multimodal Actions
  fetchExperimentReels: () => Promise<void>;
  fetchEvaluationMetrics: () => Promise<void>;
  fetchRobustnessTests: () => Promise<void>;
  fetchTestScenarios: () => Promise<void>;
  runTestScenario: (scenarioKey: string) => Promise<void>;
  startExperiment: () => void;
  nextExperimentReel: () => void;
  prevExperimentReel: () => void;
  setExperimentActiveIndex: (index: number) => void;
  updateExperimentInteraction: (partial: Partial<ExperimentInteraction> & { reel_id: string }) => void;
  finishExperiment: () => Promise<ExperimentSessionResult>;
  resetExperiment: () => void;
  updateBehaviorWeights: (weights: Partial<BehaviorWeights>) => void;
  setBehaviorWeights: (weights: Partial<BehaviorWeights>) => void;
  resetBehaviorWeights: () => void;
  fetchRobustnessResults: () => Promise<void>;
}

const initialInteractions: Record<string, ReelInteraction> = {};
for (const r of INTERACTIVE_25_REELS) {
  initialInteractions[r.id] = {
    reelId: r.id,
    topic: r.topic,
    subtopic: r.subtopic,
    category: r.category,
    watchTime: Math.round(r.duration * (r.watch_percentage / 100)),
    duration: r.duration,
    watchPercentage: r.watch_percentage,
    liked: r.liked,
    saved: r.saved,
    shared: r.shared,
    replayed: r.replayed,
    replayCount: r.replayed ? 1 : 0,
    skipped: r.skipped,
    completed: r.watch_percentage >= 90,
    timestamp: Date.now(),
  };
}

export const useStore = create<AppState & StoreActions>((set, get) => ({
  section: 'landing',
  user: null,
  reels: INTERACTIVE_25_REELS,
  activeReelIndex: 0,
  sessionInteractions: initialInteractions,
  sessionSummary: null,
  analysis: null,
  isAnalyzing: false,
  error: null,
  isDemoMode: false,
  isJudgeModalOpen: false,
  judgeStep: 1,
  userFeedbacks: [],
  selectedDimension: null,
  isEvidenceDrawerOpen: false,

  // Multimodal Experiment State (With Preloaded Invariant Datasets for Instant Web Rendering)
  experimentReels: STATIC_EXPERIMENT_REELS,
  experimentActiveIndex: 0,
  experimentSessionId: `EXP-${new Date().getFullYear()}-001`,
  experimentStartedAt: Date.now(),
  experimentInteractions: {},
  experimentResult: null,
  behaviorWeights: DEFAULT_BEHAVIOR_WEIGHTS,
  evaluationMetrics: STATIC_EVALUATION_METRICS,
  robustnessResults: null,
  testScenarios: null,

  setSection: (section) => set({ section }),
  setUser: (user) => set({ user }),

  loginDemoUser: (email = 'student@demo.com', name = 'Demo Student') =>
    set({
      user: { email, name, avatarColor: '#3b82f6', isAuthenticated: true },
      isDemoMode: true,
      section: 'feed',
      activeReelIndex: 0,
    }),

  logoutDemoUser: () =>
    set({ user: null, section: 'landing', isDemoMode: false }),

  setReels: (reels) => set({ reels }),
  setActiveReelIndex: (activeReelIndex) => set({ activeReelIndex }),

  nextReel: () => {
    const { activeReelIndex, reels } = get();
    if (activeReelIndex < reels.length - 1) set({ activeReelIndex: activeReelIndex + 1 });
  },

  prevReel: () => {
    const { activeReelIndex } = get();
    if (activeReelIndex > 0) set({ activeReelIndex: activeReelIndex - 1 });
  },

  recordInteraction: (partial) => {
    const { sessionInteractions, reels } = get();
    const existing = sessionInteractions[partial.reelId];
    const reel = reels.find((r) => r.id === partial.reelId);

    const updated: ReelInteraction = {
      reelId: partial.reelId,
      topic: partial.topic || existing?.topic || reel?.topic || 'Programming',
      subtopic: partial.subtopic || existing?.subtopic || reel?.subtopic || 'General',
      category: partial.category || existing?.category || reel?.category || 'Technology',
      watchTime: partial.watchTime ?? existing?.watchTime ?? 0,
      duration: partial.duration ?? existing?.duration ?? (reel?.duration || 45),
      watchPercentage: partial.watchPercentage ?? existing?.watchPercentage ?? 0,
      liked: partial.liked ?? existing?.liked ?? false,
      saved: partial.saved ?? existing?.saved ?? false,
      shared: partial.shared ?? existing?.shared ?? false,
      replayed: partial.replayed ?? existing?.replayed ?? false,
      replayCount: partial.replayCount ?? existing?.replayCount ?? 0,
      skipped: partial.skipped ?? existing?.skipped ?? false,
      scrollVelocity: partial.scrollVelocity ?? existing?.scrollVelocity ?? 0,
      completed: partial.completed ?? existing?.completed ?? false,
      timestamp: partial.timestamp ?? existing?.timestamp ?? Date.now(),
      calculatedScore: partial.calculatedScore ?? existing?.calculatedScore ?? 0,
    };

    set({
      sessionInteractions: {
        ...sessionInteractions,
        [partial.reelId]: updated,
      },
    });
  },

  updateReelInteraction: (partial) => get().recordInteraction(partial),

  toggleLikeReel: (reelId) => {
    const { sessionInteractions } = get();
    const cur = sessionInteractions[reelId];
    if (cur) {
      set({ sessionInteractions: { ...sessionInteractions, [reelId]: { ...cur, liked: !cur.liked } } });
    }
  },

  toggleSaveReel: (reelId) => {
    const { sessionInteractions } = get();
    const cur = sessionInteractions[reelId];
    if (cur) {
      set({ sessionInteractions: { ...sessionInteractions, [reelId]: { ...cur, saved: !cur.saved } } });
    }
  },

  shareReel: (reelId) => {
    const { sessionInteractions } = get();
    const cur = sessionInteractions[reelId];
    if (cur) {
      set({ sessionInteractions: { ...sessionInteractions, [reelId]: { ...cur, shared: true } } });
    }
  },

  replayReel: (reelId) => {
    const { sessionInteractions } = get();
    const cur = sessionInteractions[reelId];
    if (cur) {
      set({
        sessionInteractions: {
          ...sessionInteractions,
          [reelId]: { ...cur, replayed: true, replayCount: (cur.replayCount || 0) + 1, watchPercentage: 100, completed: true },
        },
      });
    }
  },

  finalizeSessionSummary: () => {
    const { sessionInteractions } = get();
    const interactions = Object.values(sessionInteractions);
    const totalReelsViewed = interactions.length;
    const totalWatchTimeSeconds = interactions.reduce((sum, i) => sum + i.watchTime, 0);
    const averageWatchPercentage =
      totalReelsViewed > 0
        ? Math.round(interactions.reduce((sum, i) => sum + i.watchPercentage, 0) / totalReelsViewed)
        : 0;
    const totalLikes = interactions.filter((i) => i.liked).length;
    const totalSaves = interactions.filter((i) => i.saved).length;
    const totalShares = interactions.filter((i) => i.shared).length;
    const totalReplays = interactions.filter((i) => i.replayed).length;
    const totalSkips = interactions.filter((i) => i.skipped).length;

    const topicMap: Record<string, { count: number; weight: number }> = {};
    for (const inter of interactions) {
      if (!topicMap[inter.topic]) topicMap[inter.topic] = { count: 0, weight: 0 };
      topicMap[inter.topic].count += 1;
      let w = inter.watchPercentage / 100;
      if (inter.saved) w += 0.3;
      if (inter.replayed) w += 0.35;
      if (inter.shared) w += 0.2;
      if (inter.liked) w += 0.15;
      if (inter.skipped) w *= 0.15;
      topicMap[inter.topic].weight += w;
    }

    const topTopics = Object.entries(topicMap)
      .map(([topic, data]) => ({ topic, count: data.count, weight: Math.round(data.weight * 10) / 10 }))
      .sort((a, b) => b.weight - a.weight);

    const summary: SessionBehaviorSummary = {
      totalReelsViewed,
      totalWatchTimeSeconds,
      averageWatchPercentage,
      totalLikes,
      totalSaves,
      totalShares,
      totalReplays,
      totalSkips,
      topTopics,
      interactions,
    };

    set({ sessionSummary: summary });
    return summary;
  },

  setAnalysis: (analysis) => set({ analysis }),
  setIsAnalyzing: (isAnalyzing) => set({ isAnalyzing }),
  setError: (error) => set({ error }),
  setDemoMode: (isDemoMode) => set({ isDemoMode }),
  setJudgeModalOpen: (isJudgeModalOpen) => set({ isJudgeModalOpen }),
  setJudgeStep: (judgeStep) => set({ judgeStep }),
  addFeedback: (feedback) =>
    set((state) => ({
      userFeedbacks: [...state.userFeedbacks.filter((f) => f.recommendationId !== feedback.recommendationId), feedback],
    })),
  setSelectedDimension: (selectedDimension) => set({ selectedDimension }),
  setEvidenceDrawerOpen: (isEvidenceDrawerOpen) => set({ isEvidenceDrawerOpen }),

  // ─── Real-World Multimodal Actions ───────────────────────────

  fetchExperimentReels: async () => {
    try {
      const resp = await axios.get<{ success: boolean; count: number; reels: ExperimentReel[] }>(
        '/api/experiment/reels',
        { timeout: 3000 }
      );
      if (resp.data?.success && Array.isArray(resp.data.reels) && resp.data.reels.length > 0) {
        set({ experimentReels: resp.data.reels });
      }
    } catch {
      if (!get().experimentReels || get().experimentReels.length === 0) {
        set({ experimentReels: STATIC_EXPERIMENT_REELS });
      }
    }
  },

  fetchEvaluationMetrics: async () => {
    try {
      const resp = await axios.get<{ success: boolean; evaluation: ClassificationEvaluation }>(
        '/api/experiment/evaluation',
        { timeout: 3000 }
      );
      if (resp.data?.success) {
        set({ evaluationMetrics: resp.data.evaluation });
      }
    } catch {
      set({ evaluationMetrics: STATIC_EVALUATION_METRICS });
    }
  },

  fetchRobustnessTests: async () => {
    try {
      const resp = await axios.get<{ success: boolean; results: RobustnessTestResult }>(
        '/api/experiment/robustness',
        { timeout: 4000 }
      );
      if (resp.data?.success) {
        set({ robustnessResults: resp.data.results });
      }
    } catch {
      // Fallback
    }
  },

  fetchTestScenarios: async () => {
    try {
      const resp = await axios.get<{ success: boolean; scenarios: Record<string, TestScenario> }>(
        '/api/experiment/scenarios',
        { timeout: 3000 }
      );
      if (resp.data?.success) {
        set({ testScenarios: resp.data.scenarios });
      }
    } catch {
      // Fallback
    }
  },

  runTestScenario: async (scenarioKey: string) => {
    const { testScenarios, behaviorWeights, experimentReels } = get();
    let scenario = testScenarios?.[scenarioKey];

    if (!scenario) {
      await get().fetchTestScenarios();
      scenario = get().testScenarios?.[scenarioKey];
    }

    const sessionId = `EXP-SCENARIO-${scenarioKey.toUpperCase().slice(0, 8)}`;
    if (scenario) {
      try {
        const resp = await axios.post<{ success: boolean; session: ExperimentSessionResult }>(
          '/api/experiment/analyze',
          {
            session_id: sessionId,
            interactions: scenario.interactions,
            weights: behaviorWeights,
          },
          { timeout: 4000 }
        );
        if (resp.data?.success && resp.data.session) {
          set({
            experimentSessionId: sessionId,
            experimentResult: resp.data.session,
            section: 'experiment_results',
          });
          return;
        }
      } catch {
        // Fallback to client engine
      }

      const mapInter: Record<string, ExperimentInteraction> = {};
      scenario.interactions.forEach((it, idx) => {
        mapInter[it.reel_id] = {
          reel_id: it.reel_id,
          filename: it.filename,
          index: idx + 1,
          session_id: sessionId,
          opened_at: Date.now() - 60000,
          closed_at: Date.now(),
          watch_duration: it.watch_duration,
          video_duration: 45,
          completion_percentage: it.completion_percentage,
          completed: it.completion_percentage >= 90,
          replay_count: it.replayed ? 1 : 0,
          replayed: it.replayed,
          skipped: it.skipped,
          liked: it.liked,
          saved: it.saved,
          shared: false,
          pause_count: 0,
          resume_count: 0,
          scroll_direction: 'down',
          time_before_skipping: 0,
          topic: it.topic,
          category: it.topic,
        };
      });

      const clientRes = evaluateExperimentSession(
        sessionId,
        Date.now() - 60000,
        mapInter,
        experimentReels,
        behaviorWeights
      );

      set({
        experimentSessionId: sessionId,
        experimentResult: clientRes,
        section: 'experiment_results',
      });
    }
  },

  startExperiment: () => {
    const sessionId = `EXP-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`;
    const { experimentReels } = get();

    const initialInter: Record<string, ExperimentInteraction> = {};
    experimentReels.forEach((r, idx) => {
      initialInter[r.id] = {
        reel_id: r.id,
        filename: r.filename,
        index: idx + 1,
        session_id: sessionId,
        opened_at: 0,
        closed_at: 0,
        watch_duration: 0,
        video_duration: r.duration || 45,
        completion_percentage: 0,
        completed: false,
        replay_count: 0,
        replayed: false,
        skipped: false,
        liked: false,
        saved: false,
        shared: false,
        pause_count: 0,
        resume_count: 0,
        scroll_direction: 'none',
        time_before_skipping: 0,
        topic: r.topic,
        category: r.category,
      };
    });

    set({
      section: 'experiment',
      experimentActiveIndex: 0,
      experimentSessionId: sessionId,
      experimentStartedAt: Date.now(),
      experimentInteractions: initialInter,
      experimentResult: null,
    });
  },

  nextExperimentReel: () => {
    const { experimentActiveIndex, experimentReels } = get();
    if (experimentActiveIndex < experimentReels.length - 1) {
      set({ experimentActiveIndex: experimentActiveIndex + 1 });
    }
  },

  prevExperimentReel: () => {
    const { experimentActiveIndex } = get();
    if (experimentActiveIndex > 0) {
      set({ experimentActiveIndex: experimentActiveIndex - 1 });
    }
  },

  setExperimentActiveIndex: (index) => set({ experimentActiveIndex: index }),

  updateExperimentInteraction: (partial) => {
    const { experimentInteractions, experimentReels } = get();
    const existing = experimentInteractions[partial.reel_id];
    const reel = experimentReels.find((r) => r.id === partial.reel_id);

    const updated: ExperimentInteraction = {
      reel_id: partial.reel_id,
      filename: partial.filename || existing?.filename || reel?.filename || '',
      index: partial.index ?? existing?.index ?? (reel?.index || 1),
      session_id: partial.session_id || existing?.session_id || get().experimentSessionId,
      opened_at: partial.opened_at ?? existing?.opened_at ?? Date.now(),
      closed_at: partial.closed_at ?? existing?.closed_at ?? Date.now(),
      watch_duration: partial.watch_duration ?? existing?.watch_duration ?? 0,
      video_duration: partial.video_duration ?? existing?.video_duration ?? (reel?.duration || 45),
      completion_percentage: partial.completion_percentage ?? existing?.completion_percentage ?? 0,
      completed: partial.completed ?? existing?.completed ?? false,
      replay_count: partial.replay_count ?? existing?.replay_count ?? 0,
      replayed: partial.replayed ?? existing?.replayed ?? false,
      skipped: partial.skipped ?? existing?.skipped ?? false,
      liked: partial.liked ?? existing?.liked ?? false,
      saved: partial.saved ?? existing?.saved ?? false,
      shared: partial.shared ?? existing?.shared ?? false,
      pause_count: partial.pause_count ?? existing?.pause_count ?? 0,
      resume_count: partial.resume_count ?? existing?.resume_count ?? 0,
      scroll_direction: partial.scroll_direction ?? existing?.scroll_direction ?? 'none',
      time_before_skipping: partial.time_before_skipping ?? existing?.time_before_skipping ?? 0,
      topic: partial.topic || existing?.topic || reel?.topic || 'Programming',
      category: partial.category || existing?.category || reel?.category || 'Technology',
    };

    set({
      experimentInteractions: {
        ...experimentInteractions,
        [partial.reel_id]: updated,
      },
    });
  },

  finishExperiment: async () => {
    const {
      experimentSessionId,
      experimentStartedAt,
      experimentInteractions,
      experimentReels,
      behaviorWeights,
    } = get();

    try {
      const resp = await axios.post<{ success: boolean; session: ExperimentSessionResult }>(
        '/api/experiment/analyze',
        {
          session_id: experimentSessionId,
          started_at: experimentStartedAt,
          interactions: Object.values(experimentInteractions),
          weights: behaviorWeights,
        },
        { timeout: 5000 }
      );
      if (resp.data?.success && resp.data.session) {
        set({
          experimentResult: resp.data.session,
          section: 'experiment_results',
        });
        return resp.data.session;
      }
    } catch {
      // Local fallback
    }

    const localResult = evaluateExperimentSession(
      experimentSessionId,
      experimentStartedAt,
      experimentInteractions,
      experimentReels,
      behaviorWeights
    );

    set({
      experimentResult: localResult,
      section: 'experiment_results',
    });
    return localResult;
  },

  resetExperiment: () => {
    get().startExperiment();
  },

  updateBehaviorWeights: (newWeights) => {
    const { behaviorWeights, experimentResult, experimentSessionId, experimentStartedAt, experimentInteractions, experimentReels } = get();
    const merged = { ...behaviorWeights, ...newWeights };
    set({ behaviorWeights: merged });

    if (experimentResult) {
      const recalculated = evaluateExperimentSession(
        experimentSessionId,
        experimentStartedAt,
        experimentInteractions,
        experimentReels,
        merged
      );
      set({ experimentResult: recalculated });
    }
  },

  setBehaviorWeights: (weights) => get().updateBehaviorWeights(weights),
  resetBehaviorWeights: () => get().updateBehaviorWeights(DEFAULT_BEHAVIOR_WEIGHTS),
  fetchRobustnessResults: async () => get().fetchRobustnessTests(),

  resetAll: () =>
    set({
      section: 'landing',
      user: null,
      reels: INTERACTIVE_25_REELS,
      activeReelIndex: 0,
      sessionInteractions: initialInteractions,
      sessionSummary: null,
      analysis: null,
      isAnalyzing: false,
      error: null,
      isDemoMode: false,
      isJudgeModalOpen: false,
      judgeStep: 1,
      selectedDimension: null,
      isEvidenceDrawerOpen: false,
      experimentActiveIndex: 0,
      experimentResult: null,
    }),
}));
