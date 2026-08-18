import { BehaviorWeights } from '../config/behaviorWeights';

// ─── User & Demo Authentication ────────────────────────────────

export interface DemoUser {
  email: string;
  name: string;
  avatarColor: string;
  isAuthenticated: boolean;
}

// ─── Reel Types ───────────────────────────────────────────────

export interface Reel {
  id: string;
  title: string;
  description: string;
  category: string;
  topic: string;
  subtopic: string;
  topics: string[];
  creator_type: string;
  creator_name?: string;
  creator_handle?: string;
  duration: number;
  watch_percentage: number;
  liked: boolean;
  saved: boolean;
  shared: boolean;
  replayed: boolean;
  skipped: boolean;
  interaction_strength: number;
  hype_score: number;
  educational_depth: number;
  technical_depth: number;
  learning_value: number;
  practical_value: number;
  specificity: number;
  career_relevance: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail_color: string;
  icon: string;
  video_snippet_text?: string;
  code_snippet?: string;
}

// ─── ML & Embeddings ──────────────────────────────────────────

export type EmbeddingVector = number[];

export interface ContentEmbedding {
  reelId: string;
  vector: EmbeddingVector;
  semanticTokens: string[];
}

export interface MLRankingScore {
  candidateId: string;
  title: string;
  category: string;
  cosineSimilarity: number;
  behaviorAlignment: number;
  qualityScore: number;
  finalRankScore: number;
  reasons: string[];
}

// ─── Multimodal Real-World Experiment Models ──────────────────

export interface KeyMoment {
  timestamp: string;
  description: string;
  confidence?: number;
  importance?: number;
}

export interface EvidenceScores {
  visual?: number;
  ocr?: number;
  speech?: number;
  semantic?: number;
}

export interface ContentIdentity {
  datasetLabel?: string;
  expectedCategory?: string;
  sourceFolder?: string;
  predictedCategory?: string;
  category: string;
  contentType?: string;
  content_type?: string;
  topics: string[];
  primary_tag: string;
  secondary_tags: string[];
  labelStatus?: 'MATCH' | 'CONFLICT';
  groundTruthMatch?: 'PASS' | 'REVIEW';
  consistencyExplanation?: string;
  aiConfidence?: number;
  evidenceScores?: EvidenceScores;
}

export interface InterestContribution {
  [topic: string]: number;
}

export interface MultimodalEvidence {
  visual_detected: string[];
  audio_transcript: string;
  ocr_keywords: string[];
  key_moments?: KeyMoment[];
  technical_depth: number;
  learning_value: number;
  entertainment_value: number;
  motivation_level?: number;
  hype_risk: number;
  difficulty: string;
  model_used?: string;
  fallback_model?: string;
  processing_time_seconds?: number;
  evidence_scores?: EvidenceScores;
}

export interface ExperimentReel {
  id: string;
  index: number;
  filename: string;
  filepath?: string;
  sourceFolder?: string;
  source_folder?: string;
  datasetLabel?: string;
  dataset_label?: string;
  expectedCategory?: string;
  expected_category?: string;
  predictedCategory?: string;
  predicted_category?: string;
  labelStatus?: 'MATCH' | 'CONFLICT';
  label_status?: 'MATCH' | 'CONFLICT';
  groundTruthMatch?: 'PASS' | 'REVIEW';
  ground_truth_match?: 'PASS' | 'REVIEW';
  consistencyExplanation?: string;
  aiConfidence?: number;
  evidenceScores?: EvidenceScores;
  file_hash?: string;
  video_url: string;
  title: string;
  content_identity?: ContentIdentity;
  interest_contribution?: InterestContribution;
  multimodal_evidence?: MultimodalEvidence;
  generated_description?: string;
  summary?: string;
  video_summary?: string;
  detected_topics?: string[];
  topics?: string[];
  primaryCategory?: string;
  category: string;
  contentType?: string;
  content_type?: string;
  content_confidence?: string;
  key_moments?: KeyMoment[];
  keyMoments?: KeyMoment[];
  topic: string;
  subtopic: string;
  technical_depth: number;
  technicalDepth?: number;
  learning_value: number;
  educational_value?: number;
  educationalValue?: number;
  educational_depth: number;
  entertainment_value?: number;
  entertainmentValue?: number;
  motivation_level?: number;
  motivationLevel?: number;
  hype_score: number;
  hypeRisk?: number;
  difficulty: string;
  career_relevance: number;
  duration: number;
  width?: number;
  height?: number;
  fps?: number;
  description: string;
  thumbnail_color: string;
}

export interface ExperimentInteraction {
  reel_id: string;
  filename: string;
  index: number;
  session_id: string;
  opened_at: number;
  closed_at: number;
  watch_duration: number;
  video_duration: number;
  completion_percentage: number;
  completed: boolean;
  replay_count: number;
  replayed: boolean;
  skipped: boolean;
  liked: boolean;
  saved: boolean;
  shared: boolean;
  pause_count: number;
  resume_count: number;
  scroll_direction: 'down' | 'up' | 'none';
  time_before_skipping: number;
  topic: string;
  category: string;
  behavior_score?: number;
}

export interface StructuredBreakdown {
  current_reel: string;
  content_understood: string;
  category: string;
  interest_signal: string;
  interest_detected: string;
  why_evidence: string[];
  recommended_tech_reel: string;
  recommended_category: string;
  why_this_recommendation: string;
  difficulty: string;
  confidence: 'HIGH' | 'MEDIUM' | 'LOW';
  confidence_numeric: number;
  why_not_alternatives: string;
}

export interface ExperimentSessionResult {
  session_id: string;
  started_at?: number;
  completed_at?: number;
  primary_interest: string;
  confidence_tier?: 'HIGH' | 'MEDIUM' | 'LOW';
  confidence_percent: number;
  total_interactions?: number;
  total_reels_viewed?: number;
  total_watch_time?: number;
  total_watch_seconds?: number;
  total_likes: number;
  total_saves: number;
  total_replays: number;
  total_skips: number;
  interest_vector: Record<string, number>;
  supporting_signals: string[];
  weak_signals: string[];
  structured_breakdown?: StructuredBreakdown;
  recommendation: {
    title: string;
    category: string;
    match_percentage: number;
    difficulty: string;
    why_this: string[];
    why_not: string[];
  };
  interactions?: ExperimentInteraction[];
}

// ─── Ground-Truth Evaluation Metrics ──────────────────────────

export interface CategoryMetric {
  samples: number;
  precision: number;
  recall: number;
  f1_score: number;
}

export interface EvaluationSampleRecord {
  id: string;
  filename: string;
  sourceFolder: string;
  datasetLabel: string;
  predictedCategory: string;
  contentType?: string;
  aiConfidence: number;
  evidenceScores?: EvidenceScores;
  labelStatus: 'MATCH' | 'CONFLICT';
  explanation?: string;
}

export interface ClassificationEvaluation {
  total_evaluated: number;
  matches_count?: number;
  conflicts_count?: number;
  agreement_rate?: number;
  correct_predictions?: number;
  incorrect_predictions?: number;
  category_accuracy?: number;
  macro_f1?: number;
  average_confidence?: number;
  categories: string[];
  per_category: Record<string, CategoryMetric>;
  confusion_matrix: Record<string, Record<string, number>>;
  sample_records?: EvaluationSampleRecord[];
}

export interface RobustnessTestResult {
  success: boolean;
  filename_test: {
    test_name: string;
    passed: boolean;
    sample_tested: string;
    predictions: Array<{
      filename: string;
      predicted_category: string;
      generated_description: string;
      file_hash: string;
    }>;
    conclusion: string;
  };
  folder_test: {
    test_name: string;
    passed: boolean;
    predictions: Array<{
      folder: string;
      predicted_category: string;
      file_hash: string;
    }>;
    conclusion: string;
  };
  timestamp: number;
}

export interface TestScenario {
  name: string;
  description: string;
  interactions: Array<{
    reel_id: string;
    filename: string;
    topic: string;
    completion_percentage: number;
    watch_duration: number;
    liked: boolean;
    replayed: boolean;
    saved: boolean;
    skipped: boolean;
  }>;
  expected_interest: string;
  expected_confidence: string;
}

// ─── Real-Time Session Telemetry (Simulation Feed) ─────────────

export interface ReelInteraction {
  reelId: string;
  topic: string;
  subtopic: string;
  category: string;
  watchTime: number;
  duration: number;
  watchPercentage: number;
  liked: boolean;
  saved: boolean;
  shared: boolean;
  replayed: boolean;
  replayCount: number;
  skipped: boolean;
  scrollVelocity?: number;
  completed: boolean;
  timestamp: number;
  calculatedScore?: number;
}

export interface SessionBehaviorSummary {
  totalReelsViewed: number;
  totalWatchTimeSeconds: number;
  averageWatchPercentage: number;
  totalLikes: number;
  totalSaves: number;
  totalShares: number;
  totalReplays: number;
  totalSkips: number;
  topTopics: { topic: string; count: number; weight: number }[];
  interactions: ReelInteraction[];
}

// ─── Legacy Analysis Models ───────────────────────────────────

export interface BehaviorAnalysis {
  reel_id: string;
  engagement_score: number;
  watch_percentage: number;
  signal_type: 'strong_positive' | 'moderate_positive' | 'weak_positive' | 'strong_negative';
  signals: {
    replayed: boolean;
    saved: boolean;
    liked: boolean;
    shared: boolean;
    skipped: boolean;
  };
}

export interface ContentAnalysis {
  reel_id: string;
  clusters: Record<string, number>;
  hype_score: number;
  educational_depth: number;
  technical_depth: number;
  is_hype: boolean;
}

export interface ReelAnalysis {
  reel_id: string;
  title: string;
  category: string;
  content_analysis: ContentAnalysis;
  behavior_analysis: BehaviorAnalysis;
}

export interface InterestCluster {
  cluster: string;
  label: string;
  score: number;
  why_text: string;
  supporting_reels: string[];
  behavior_signals: string[];
  confidence: number;
}

export interface InferredInterest {
  primary_cluster: string;
  primary_label: string;
  primary_score: number;
  confidence: number;
  confidence_percent: number;
  confidence_formula_breakdown: {
    base_convergence: number;
    high_intent_bonus: number;
    contradiction_penalty: number;
    final_confidence: number;
  };
  supporting_signals: string[];
  supporting_reels: {
    id: string;
    title: string;
    category: string;
    watch_percentage: number;
    key_signal: string;
  }[];
  related_topics: string[];
  contradictory_signals: string[];
  why_inferred: string;
  uncertainty_note: string;
  secondary: InterestCluster[];
}

export interface MatchScoreBreakdown {
  topic_match: number;
  skill_progression: number;
  technical_depth: number;
  learning_value: number;
  interest_alignment: number;
  final_match: number;
  formula_explanation: string;
}

export interface QualityScorecard {
  title: string;
  category: string;
  hype_risk: number;
  technical_depth: number;
  learning_value: number;
  specificity: number;
  practical_value: number;
  shortcut_promise: 'HIGH' | 'MEDIUM' | 'LOW';
  status: 'REJECTED' | 'ACCEPTED';
  reason: string;
  alternative_recommended: string;
}

export interface WhyThisWhyNot {
  why_this: {
    title: string;
    reasons: string[];
  };
  why_not: {
    title: string;
    reasons: string[];
  };
}

export interface LearningTrajectory {
  current: { stage: string; topics: string[]; description: string };
  developing: { stage: string; topics: string[]; description: string };
  emerging: { stage: string; topics: string[]; description: string };
  potential_direction: { stage: string; title: string; confidence: string; description: string };
}

export interface SystemLearnedSummary {
  primary_interest: string;
  strong_signals: string[];
  avoided: string[];
  emerging_direction: string;
  confidence: number;
  evidence_count: number;
  why_differentiated: string;
}

export interface Recommendation {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  educational_depth: number;
  hype_score: number;
  match_clusters: string[];
  reason_template: string;
  match_percentage: number;
  score_breakdown: MatchScoreBreakdown;
  why_this_reasons: string[];
}

export interface HypeFilter {
  rejected: boolean;
  rejected_title?: string;
  rejected_reason?: string;
  scorecard?: QualityScorecard;
}

export interface GraphNode {
  id: string;
  label: string;
  score: number;
  is_primary: boolean;
  connected_reason?: string;
}

export interface GraphEdge {
  source: string;
  target: string;
  strength: number;
  reason: string;
}

export interface WowMomentData {
  watched_topics: string[];
  discovered_components: string[];
  latent_interest: string;
  confidence: number;
  punchline: string;
}

export interface AnalysisResult {
  reel_analyses: ReelAnalysis[];
  interest_vector: Record<string, number>;
  dimension_details: Record<string, InterestCluster>;
  evidence: Record<string, string[]>;
  interest: InferredInterest;
  recommendation: Recommendation;
  hype_filter: HypeFilter;
  why_this_why_not: WhyThisWhyNot;
  learning_trajectory: LearningTrajectory;
  system_learned: SystemLearnedSummary;
  wow_moment: WowMomentData;
  session_summary?: SessionBehaviorSummary;
  ml_ranking_scores?: MLRankingScore[];
  reasoning: string[];
  graph: {
    nodes: GraphNode[];
    edges: GraphEdge[];
  };
  llm_explanation?: string;
}

// ─── App Navigation & State ───────────────────────────────────

export type AppSection =
  | 'landing'
  | 'login'
  | 'feed'
  | 'dashboard'
  | 'analyzing'
  | 'results'
  | 'experiment'
  | 'experiment_results'
  | 'admin';

export interface UserFeedback {
  recommendationId: string;
  feedbackType: 'helpful' | 'not_relevant' | 'already_know' | 'too_advanced' | 'want_beginner';
  timestamp: number;
}

export interface AppState {
  section: AppSection;
  user: DemoUser | null;
  reels: Reel[];
  activeReelIndex: number;
  sessionInteractions: Record<string, ReelInteraction>;
  sessionSummary: SessionBehaviorSummary | null;
  analysis: AnalysisResult | null;
  isAnalyzing: boolean;
  error: string | null;
  isDemoMode: boolean;
  isJudgeModalOpen: boolean;
  judgeStep: number;
  userFeedbacks: UserFeedback[];
  selectedDimension: string | null;
  isEvidenceDrawerOpen: boolean;

  // Real-World Experiment state
  experimentReels: ExperimentReel[];
  experimentActiveIndex: number;
  experimentSessionId: string;
  experimentStartedAt: number;
  experimentInteractions: Record<string, ExperimentInteraction>;
  experimentResult: ExperimentSessionResult | null;
  behaviorWeights: BehaviorWeights;
  evaluationMetrics: ClassificationEvaluation | null;
  robustnessResults: RobustnessTestResult | null;
  testScenarios: Record<string, TestScenario> | null;
}
