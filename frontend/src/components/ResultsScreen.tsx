import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award, BookOpen, Zap, CheckCircle, ChevronDown,
  ChevronUp, ArrowRight, RotateCcw, TrendingUp, Brain, Lightbulb,
  HelpCircle, Compass, FileSearch, Play, Activity, CheckCircle2, ShieldAlert,
} from 'lucide-react';
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip,
} from 'recharts';
import { useStore } from '../store/useStore';
import InterestGraph from './InterestGraph';
import WowMoment from './WowMoment';
import QualityScorecardView from './QualityScorecardView';
import WhyThisWhyNotView from './WhyThisWhyNotView';
import LearningTrajectoryView from './LearningTrajectoryView';
import FeedbackPanel from './FeedbackPanel';
import SystemLearnedSummaryView from './SystemLearnedSummaryView';
import DimensionDetailModal from './DimensionDetailModal';
import InteractiveEvidenceDrawer from './InteractiveEvidenceDrawer';
import JudgeModeModal from './JudgeModeModal';
import type { InterestCluster } from '../types';

const DIFFICULTY_CONFIG = {
  Beginner: { color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  Intermediate: { color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
  Advanced: { color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20' },
};

const CATEGORY_COLORS: Record<string, string> = {
  'System Design': '#f97316',
  'AI': '#8b5cf6',
  'DSA': '#8b5cf6',
  'Developer Tools': '#10b981',
  'Cloud': '#06b6d4',
  'Java': '#f59e0b',
  'Cybersecurity': '#ef4444',
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
      {children}
    </h2>
  );
}

export default function ResultsScreen() {
  const {
    analysis,
    setSection,
    setAnalysis,
    setJudgeModalOpen,
    setJudgeStep,
    selectedDimension,
    setSelectedDimension,
    isEvidenceDrawerOpen,
    setEvidenceDrawerOpen,
  } = useStore();

  const [showAlt, setShowAlt] = useState(false);
  const [showWhyExpanded, setShowWhyExpanded] = useState(false);
  const [inspectedDimension, setInspectedDimension] = useState<InterestCluster | null>(null);

  if (!analysis) return null;

  const {
    interest,
    recommendation,
    hype_filter,
    reasoning,
    graph,
    interest_vector,
    dimension_details,
    why_this_why_not,
    learning_trajectory,
    system_learned,
    wow_moment,
    session_summary,
    ml_ranking_scores,
  } = analysis;

  const diffCfg = DIFFICULTY_CONFIG[recommendation.difficulty];
  const catColor = CATEGORY_COLORS[recommendation.category] ?? '#6366f1';

  // Radar data with clickable mapping
  const radarData = Object.entries(dimension_details || {})
    .filter(([k]) => k !== 'hype')
    .map(([key, item]) => ({
      subject: item.label.split(' ')[0],
      fullName: item.label,
      score: item.score,
      key,
      fullMark: 100,
    }));

  const handleReset = () => {
    setAnalysis(null);
    setSection('feed');
  };

  const handleOpenJudgeTour = () => {
    setJudgeStep(1);
    setJudgeModalOpen(true);
  };

  const handleInspectCluster = (clusterKey: string) => {
    const detail = dimension_details?.[clusterKey];
    if (detail) {
      setInspectedDimension(detail);
    }
  };

  return (
    <div className="min-h-screen pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto pt-6 space-y-8">

        {/* ── TOP ACTION BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-800 pb-4"
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="badge bg-brand-500/20 text-brand-300 border-brand-500/30 text-xs font-mono">
                Model: ML Vector Cosine & Latent Inference
              </span>
              <span className="text-xs text-surface-500 hidden sm:inline">• 25 Diverse Stream Items Audited</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
              Behavioral Intelligence Report
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              id="judge-tour-btn"
              onClick={handleOpenJudgeTour}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 hover:bg-amber-500/25 transition-all text-xs sm:text-sm font-semibold"
            >
              <Play size={13} />
              <span>90s Judge Tour</span>
            </button>

            <button
              id="open-evidence-top"
              onClick={() => setEvidenceDrawerOpen(true)}
              className="btn-secondary text-xs sm:text-sm py-2 px-3.5 gap-1.5"
            >
              <FileSearch size={14} />
              <span>Audit Evidence</span>
            </button>

            <button id="reset-btn" onClick={handleReset} className="btn-ghost text-xs sm:text-sm gap-1.5">
              <RotateCcw size={13} />
              <span>Explore More Reels</span>
            </button>
          </div>
        </motion.div>

        {/* ── REAL SESSION AUDIT TELEMETRY (If available) ── */}
        {session_summary && (
          <div className="card p-5 border-surface-800 bg-surface-900/60">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-surface-400 font-semibold flex items-center gap-1.5">
                <Activity size={14} className="text-emerald-400" /> Real Session Interaction Telemetry
              </span>
              <span className="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/30 text-[10px]">
                Audited Locally
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2.5 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-surface-950/70 border border-surface-800">
                <span className="text-[10px] text-surface-400 block">Reels Viewed</span>
                <span className="text-sm font-bold text-white font-mono">{session_summary.totalReelsViewed}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-950/70 border border-surface-800">
                <span className="text-[10px] text-surface-400 block">Avg Watch %</span>
                <span className="text-sm font-bold text-accent-cyan font-mono">{session_summary.averageWatchPercentage}%</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-950/70 border border-surface-800">
                <span className="text-[10px] text-surface-400 block">Likes Given</span>
                <span className="text-sm font-bold text-rose-400 font-mono">{session_summary.totalLikes}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-950/70 border border-surface-800">
                <span className="text-[10px] text-surface-400 block">Saves (Intent)</span>
                <span className="text-sm font-bold text-amber-400 font-mono">{session_summary.totalSaves}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-950/70 border border-surface-800">
                <span className="text-[10px] text-surface-400 block">Replays</span>
                <span className="text-sm font-bold text-emerald-400 font-mono">{session_summary.totalReplays}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-950/70 border border-surface-800">
                <span className="text-[10px] text-surface-400 block">Skips Filtered</span>
                <span className="text-sm font-bold text-surface-400 font-mono">{session_summary.totalSkips}</span>
              </div>
            </div>
          </div>
        )}

        {/* ── 1. THE WOW MOMENT (CLIMAX OF THE DEMO) ── */}
        {wow_moment && <WowMoment data={wow_moment} />}

        {/* ── 2. TWO-COLUMN CORE ANALYTICS ── */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* ── LEFT: INTEREST DNA & SEMANTIC MAP ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="card space-y-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <SectionTitle>
                  <Brain size={20} className="text-brand-400" />
                  Interest DNA & Latent Inference
                </SectionTitle>
                <p className="text-surface-400 text-xs sm:text-sm">
                  Semantic convergence calculated from multimodal interactions
                </p>
              </div>
              <button
                onClick={() => setEvidenceDrawerOpen(true)}
                className="text-xs text-accent-cyan hover:underline font-mono"
              >
                Formula Breakdown →
              </button>
            </div>

            {/* Primary interest card */}
            <div className="glass-strong rounded-2xl p-5 text-center relative overflow-hidden border border-brand-500/30 glow-brand">
              <div
                className="absolute inset-0 opacity-10"
                style={{ background: `radial-gradient(circle at 50% 50%, #3b82f6, transparent 70%)` }}
              />
              <p className="text-xs font-mono uppercase tracking-widest text-brand-300 font-semibold mb-2">
                Primary Latent Interest Inferred
              </p>
              <motion.h2
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3"
              >
                {interest.primary_label.toUpperCase()}
              </motion.h2>

              {/* Confidence progress */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex-1 h-2.5 rounded-full bg-surface-800 overflow-hidden max-w-[140px]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${interest.confidence_percent}%` }}
                    transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 via-accent-cyan to-brand-300"
                  />
                </div>
                <span className="text-2xl font-black text-brand-400 font-mono">
                  {interest.confidence_percent}%
                </span>
                <span className="text-surface-400 text-xs">confidence</span>
              </div>

              {/* Secondary Interest Clusters with forensic click */}
              <div>
                <p className="text-[11px] font-mono text-surface-400 uppercase tracking-wider mb-2">
                  Supporting Clusters (Click any to inspect evidence):
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {interest.secondary.map((s) => (
                    <button
                      key={s.cluster}
                      onClick={() => handleInspectCluster(s.cluster)}
                      className="badge bg-surface-800/80 hover:bg-brand-500/20 hover:border-brand-500/40 border border-surface-700/70 text-surface-200 text-xs transition-all cursor-pointer"
                    >
                      <span>{s.label}</span>
                      <span className="text-brand-400 font-mono font-bold ml-1">{s.score}/100</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Semantic Relationship Map */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-surface-400 font-medium uppercase tracking-wider">
                  Semantic Relationship Graph
                </p>
                <span className="text-[11px] font-mono text-surface-500">Node size = Interest Strength</span>
              </div>
              <InterestGraph nodes={graph.nodes} edges={graph.edges} />
            </div>
          </motion.div>

          {/* ── RIGHT: VECTOR RADAR & MATCH BREAKDOWN ── */}
          <div className="space-y-6">

            {/* Radar with interactive dimensions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <div className="flex items-center justify-between mb-1">
                <SectionTitle>
                  <TrendingUp size={20} className="text-accent-cyan" />
                  Calibrated Interest Vector
                </SectionTitle>
                <span className="text-xs text-surface-500 font-mono">0–100 Normalized</span>
              </div>
              <p className="text-surface-400 text-xs sm:text-sm mb-4">
                Multimodal scoring across 8 technical dimensions
              </p>

              <ResponsiveContainer width="100%" height={210}>
                <RadarChart data={radarData} margin={{ top: 10, right: 25, bottom: 10, left: 25 }}>
                  <PolarGrid stroke="#334155" strokeOpacity={0.5} />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'Inter' }}
                  />
                  <Radar
                    name="Interest Score"
                    dataKey="score"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.25}
                    strokeWidth={2}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="p-2.5 rounded-xl bg-surface-900 border border-surface-700 text-xs shadow-xl">
                            <p className="font-bold text-white">{data.fullName}</p>
                            <p className="text-accent-cyan font-mono mt-0.5">Score: {data.score}/100</p>
                            <p className="text-[10px] text-surface-400 mt-1">Click cluster below for evidence</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>

              {/* Quick Dimension Pill Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-3 pt-3 border-t border-surface-800/80">
                {radarData.map((d) => (
                  <button
                    key={d.key}
                    onClick={() => handleInspectCluster(d.key)}
                    className="p-2 rounded-lg bg-surface-800/40 hover:bg-surface-800 text-left border border-surface-700/40 transition-all"
                  >
                    <span className="text-[10px] text-surface-400 block truncate">{d.fullName}</span>
                    <span className="text-xs font-mono font-bold text-white">{d.score}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* AI Reasoning Chain */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="card"
            >
              <div className="flex items-center justify-between mb-1">
                <SectionTitle>
                  <Lightbulb size={20} className="text-amber-400" />
                  Deterministic Reasoning Chain
                </SectionTitle>
                <span className="text-xs text-amber-400 font-mono">5 Evidence Nodes</span>
              </div>
              <p className="text-surface-400 text-xs sm:text-sm mb-4">
                Explainable behavioral sequence connecting inputs to inference
              </p>

              <div className="space-y-2.5">
                {(showWhyExpanded ? reasoning : reasoning.slice(0, 3)).map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex gap-3 p-3 rounded-xl bg-surface-800/50 border border-surface-700/30"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center mt-0.5">
                      <span className="text-brand-400 text-[10px] font-bold">{i + 1}</span>
                    </div>
                    <p className="text-surface-300 text-xs sm:text-sm leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>

              {reasoning.length > 3 && (
                <button
                  id="toggle-reasoning"
                  onClick={() => setShowWhyExpanded(!showWhyExpanded)}
                  className="btn-ghost text-xs sm:text-sm mt-3 w-full justify-center"
                >
                  {showWhyExpanded ? (
                    <><ChevronUp size={14} /> Show Less</>
                  ) : (
                    <><ChevronDown size={14} /> Show All {reasoning.length} Analytical Steps</>
                  )}
                </button>
              )}
            </motion.div>
          </div>
        </div>

        {/* ── 3. CONTENT QUALITY SCORECARD (HYPE FILTER PROOF) ── */}
        {hype_filter.rejected && hype_filter.scorecard && (
          <QualityScorecardView scorecard={hype_filter.scorecard} />
        )}

        {/* ── 4. "WHY THIS?" VS "WHY NOT THAT?" COMPARATIVE REASONING ── */}
        {why_this_why_not && <WhyThisWhyNotView data={why_this_why_not} />}

        {/* ── 5. YOUR INFERRED LEARNING TRAJECTORY ── */}
        {learning_trajectory && <LearningTrajectoryView trajectory={learning_trajectory} />}

        {/* ── 6. PRIMARY RECOMMENDATION WITH MATCH SCORE BREAKDOWN ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card relative overflow-hidden border-brand-500/40 bg-surface-900/90 glow-brand p-6 sm:p-8"
        >
          <div
            className="absolute top-0 left-0 right-0 h-1.5"
            style={{ background: `linear-gradient(90deg, ${catColor}, #3b82f6)` }}
          />

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="badge bg-brand-500/20 text-brand-300 border-brand-500/40 text-xs font-semibold">
                  Trajectory-Aligned Leap
                </span>
                <span className="badge bg-emerald-500/10 border-emerald-500/30 text-emerald-400 text-xs">
                  <CheckCircle size={10} /> Passed Quality Filter
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
                {recommendation.title}
              </h2>

              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span
                  className="badge text-xs font-semibold"
                  style={{ background: `${catColor}15`, borderColor: `${catColor}30`, color: catColor }}
                >
                  {recommendation.category}
                </span>
                <span className={`badge border text-xs ${diffCfg.bg} ${diffCfg.color}`}>
                  <BookOpen size={11} />
                  {recommendation.difficulty}
                </span>
                <span className="badge bg-surface-800 border-surface-700 text-surface-300 text-xs font-mono">
                  Educational Depth: {Math.round(recommendation.educational_depth * 100)}%
                </span>
              </div>

              <p className="text-surface-300 text-sm leading-relaxed bg-surface-950/60 p-4 rounded-xl border border-surface-800">
                {recommendation.reason_template}
              </p>
            </div>

            {/* Match Percentage Ring */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-950/80 border border-surface-800">
              <div className="relative w-24 h-24">
                <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                  <circle cx="40" cy="40" r="32" fill="none" stroke="#1e2030" strokeWidth="6" />
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="32"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 32}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 32 }}
                    animate={{
                      strokeDashoffset: 2 * Math.PI * 32 * (1 - recommendation.match_percentage / 100),
                    }}
                    transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-white font-mono">
                    {recommendation.match_percentage}%
                  </span>
                  <span className="text-[10px] text-surface-500 uppercase font-semibold -mt-1">
                    Match
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-mono text-brand-400 mt-2">Weighted Score</span>
            </div>
          </div>

          {/* Sub-Metric Match Breakdown Scorecard */}
          {recommendation.score_breakdown && (
            <div className="p-4 rounded-2xl bg-surface-950/60 border border-surface-800/80 mb-6">
              <span className="text-xs font-semibold text-surface-400 uppercase tracking-wider block mb-3">
                Transparent Match Score Breakdown
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-center mb-3">
                <div className="p-2.5 rounded-xl bg-surface-900/80 border border-surface-800">
                  <span className="text-[10px] text-surface-400 block">Topic Match (25%)</span>
                  <span className="text-sm font-bold font-mono text-white">
                    {recommendation.score_breakdown.topic_match}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-900/80 border border-surface-800">
                  <span className="text-[10px] text-surface-400 block">Progression (20%)</span>
                  <span className="text-sm font-bold font-mono text-emerald-400">
                    {recommendation.score_breakdown.skill_progression}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-900/80 border border-surface-800">
                  <span className="text-[10px] text-surface-400 block">Tech Depth (20%)</span>
                  <span className="text-sm font-bold font-mono text-accent-cyan">
                    {recommendation.score_breakdown.technical_depth}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-900/80 border border-surface-800">
                  <span className="text-[10px] text-surface-400 block">Learning Value (20%)</span>
                  <span className="text-sm font-bold font-mono text-brand-300">
                    {recommendation.score_breakdown.learning_value}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-900/80 border border-surface-800 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-surface-400 block">Alignment (15%)</span>
                  <span className="text-sm font-bold font-mono text-amber-400">
                    {recommendation.score_breakdown.interest_alignment}
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-surface-400 font-mono text-center">
                {recommendation.score_breakdown.formula_explanation}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setEvidenceDrawerOpen(true)}
              className="btn-secondary text-sm flex-1 sm:flex-none justify-center"
            >
              <Zap size={14} className="text-accent-cyan" />
              Trace Full Evidence
            </button>
            <button
              onClick={() => setShowAlt(!showAlt)}
              className="btn-ghost text-sm"
            >
              {showAlt ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              Alternative Candidate
            </button>
            <button
              className="btn-primary text-sm flex-1 sm:flex-none justify-center"
            >
              Begin Module
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Alternative recommendation dropdown */}
          <AnimatePresence>
            {showAlt && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-4 rounded-xl border border-surface-700/50 bg-surface-950/80 overflow-hidden"
              >
                <span className="text-xs font-mono uppercase tracking-widest text-surface-400">
                  Alternative Candidate (Rank #2)
                </span>
                <p className="text-white font-bold text-sm mt-1">
                  "LeetCode Patterns That Actually Get You Hired: Advanced Graph & DP"
                </p>
                <p className="text-surface-400 text-xs mt-1">
                  Category: DSA · Match: 84% · Reason: High problem-solving interest, but distributed systems offers greater progression depth.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Adaptive Feedback Loop */}
          <FeedbackPanel recommendationId={recommendation.id} />
        </motion.div>

        {/* ── 7. WHAT TECHLENS LEARNED SUMMARY CARD ── */}
        {system_learned && (
          <SystemLearnedSummaryView
            summary={system_learned}
            onOpenEvidence={() => setEvidenceDrawerOpen(true)}
          />
        )}

      </div>

      {/* Modals & Drawers */}
      <JudgeModeModal />
      <InteractiveEvidenceDrawer
        isOpen={isEvidenceDrawerOpen}
        onClose={() => setEvidenceDrawerOpen(false)}
        interest={interest}
      />
      <DimensionDetailModal
        dimension={inspectedDimension}
        onClose={() => setInspectedDimension(null)}
      />
    </div>
  );
}
