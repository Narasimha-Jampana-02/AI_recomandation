import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Bookmark,
  Share2,
  RotateCcw,
  Play,
  Pause,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Zap,
  Code,
  Server,
  Brain,
  Monitor,
  GitBranch,
  Shield,
  Briefcase,
  Gamepad2,
  CheckCircle2,
  ArrowRight,
  User,
  Activity,
  Award,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useStore } from '../store/useStore';
import { analyzeReels } from '../services/api';

const ICON_MAP: Record<string, LucideIcon> = {
  Code,
  Server,
  Brain,
  Monitor,
  GitBranch,
  Shield,
  Briefcase,
  Gamepad2,
  Zap,
};

export default function ReelFeed() {
  const {
    reels,
    activeReelIndex,
    setActiveReelIndex,
    nextReel,
    prevReel,
    sessionInteractions,
    updateReelInteraction,
    toggleLikeReel,
    toggleSaveReel,
    shareReel,
    replayReel,
    finalizeSessionSummary,
    setAnalysis,
    setSection,
    setIsAnalyzing,
    user,
  } = useStore();

  const [isPlaying, setIsPlaying] = useState(true);
  const [currentWatchPct, setCurrentWatchPct] = useState(0);
  const [copiedShare, setCopiedShare] = useState(false);

  const activeReel = reels[activeReelIndex] || reels[0];
  const interaction = sessionInteractions[activeReel.id] || {
    reelId: activeReel.id,
    watchPercentage: 0,
    liked: false,
    saved: false,
    shared: false,
    replayed: false,
    replayCount: 0,
    skipped: false,
  };

  // Video simulation progress interval
  useEffect(() => {
    setCurrentWatchPct(interaction.watchPercentage || 0);
    setIsPlaying(true);
  }, [activeReelIndex]);

  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentWatchPct((prev) => {
          if (prev >= 100) {
            // Completed 100%
            updateReelInteraction({
              reelId: activeReel.id,
              watchPercentage: 100,
              completed: true,
            });
            return 100;
          }
          const next = Math.min(prev + 4, 100);
          updateReelInteraction({
            reelId: activeReel.id,
            watchPercentage: next,
            watchTime: Math.round(activeReel.duration * (next / 100)),
          });
          return next;
        });
      }, 350);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeReel.id, activeReel.duration]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'j') {
        nextReel();
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        prevReel();
      } else if (e.key === ' ' || e.key === 'k') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      } else if (e.key === 'l') {
        toggleLikeReel(activeReel.id);
      } else if (e.key === 's') {
        toggleSaveReel(activeReel.id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeReelIndex, activeReel.id]);

  const handleShareClick = () => {
    shareReel(activeReel.id);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const handleReplayClick = () => {
    replayReel(activeReel.id);
    setCurrentWatchPct(0);
    setIsPlaying(true);
  };

  const handleTriggerAnalysis = async () => {
    const summary = finalizeSessionSummary();
    setSection('analyzing');
    setIsAnalyzing(true);
    try {
      const result = await analyzeReels(reels, sessionInteractions, summary);
      setAnalysis(result);
    } catch {
      setSection('results');
    }
  };

  const IconComp = ICON_MAP[activeReel.icon] || Code;

  // Real-time telemetry summary
  const totalInteracted = Object.values(sessionInteractions).filter(
    (i) => i.watchPercentage > 0 || i.liked || i.saved || i.replayed
  ).length;

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 gap-6 max-w-7xl mx-auto">

      {/* ── LEFT / MAIN: VERTICAL REEL PLAYER ── */}
      <div className="relative w-full max-w-md h-[680px] rounded-3xl bg-surface-950 border border-surface-800 shadow-2xl overflow-hidden flex flex-col justify-between select-none">

        {/* Ambient Top Gradient */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-700"
          style={{ background: `radial-gradient(circle at 50% 20%, ${activeReel.thumbnail_color}, transparent 60%)` }}
        />

        {/* ── PLAYER HEADER ── */}
        <div className="relative z-10 p-4 flex items-center justify-between bg-gradient-to-b from-surface-950/90 to-transparent">
          <div className="flex items-center gap-2">
            <span className="badge bg-brand-500/20 text-brand-300 border-brand-500/40 text-[10px] font-mono">
              Reel {activeReelIndex + 1} of {reels.length}
            </span>
            <span
              className="badge text-[10px] font-semibold border"
              style={{
                background: `${activeReel.thumbnail_color}20`,
                borderColor: `${activeReel.thumbnail_color}40`,
                color: activeReel.thumbnail_color,
              }}
            >
              {activeReel.category}
            </span>
          </div>

          <div className="flex items-center gap-1 text-xs font-mono text-surface-400">
            <span>{Math.round(currentWatchPct)}%</span>
            <div className="w-12 h-1 rounded-full bg-surface-800 overflow-hidden">
              <div
                className="h-full bg-brand-400 transition-all duration-300"
                style={{ width: `${currentWatchPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT SIMULATOR (CARD/CODE) ── */}
        <div className="relative z-10 px-5 flex-1 flex flex-col justify-center my-auto">
          {/* Creator Profile */}
          <div className="flex items-center gap-2.5 mb-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-xs shadow-md"
              style={{ background: activeReel.thumbnail_color }}
            >
              {activeReel.creator_name?.[0] || 'T'}
            </div>
            <div>
              <p className="text-white text-xs font-bold leading-tight">
                {activeReel.creator_name || 'TechLens Creator'}
              </p>
              <p className="text-[10px] text-surface-400 font-mono">
                {activeReel.creator_handle || '@techlens'} · {activeReel.creator_type}
              </p>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-lg sm:text-xl font-bold text-white leading-snug mb-3">
            {activeReel.title}
          </h2>

          {/* Interactive Simulated Code / Visual Canvas */}
          <div className="rounded-2xl bg-surface-900/90 border border-surface-800 p-4 shadow-inner relative overflow-hidden mb-3">
            <div className="flex items-center justify-between text-[11px] text-surface-400 border-b border-surface-800/80 pb-2 mb-2 font-mono">
              <span className="flex items-center gap-1.5 text-accent-cyan">
                <IconComp size={13} /> {activeReel.subtopic}
              </span>
              <span>{activeReel.difficulty}</span>
            </div>

            {/* Snippet / Text */}
            <p className="text-xs text-surface-300 leading-relaxed mb-3">
              {activeReel.video_snippet_text || activeReel.description}
            </p>

            {activeReel.code_snippet && (
              <pre className="p-2.5 rounded-lg bg-surface-950/80 border border-surface-800 text-[11px] font-mono text-brand-300 overflow-x-auto leading-tight">
                <code>{activeReel.code_snippet}</code>
              </pre>
            )}

            {/* Play/Pause overlay indicator */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-surface-950/60 backdrop-blur-xs flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-brand-500/80 text-white flex items-center justify-center shadow-lg">
                  <Play size={20} className="ml-1" />
                </div>
              </div>
            )}
          </div>

          {/* Topics Badges */}
          <div className="flex flex-wrap gap-1.5">
            {activeReel.topics.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded bg-surface-900 border border-surface-800 text-[10px] text-surface-400 font-mono"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT-SIDE ACTION BUTTONS (INSIDE PLAYER) ── */}
        <div className="absolute right-3.5 bottom-24 z-20 flex flex-col items-center gap-3">
          {/* Like Button */}
          <button
            onClick={() => toggleLikeReel(activeReel.id)}
            className={`p-3 rounded-full backdrop-blur-md transition-all shadow-lg flex flex-col items-center gap-1 ${
              interaction.liked
                ? 'bg-rose-500 text-white scale-110'
                : 'bg-surface-900/80 text-surface-300 hover:text-white border border-surface-700'
            }`}
          >
            <Heart size={18} fill={interaction.liked ? 'currentColor' : 'none'} />
          </button>
          <span className="text-[10px] font-mono text-surface-400">
            {interaction.liked ? 'Liked' : 'Like'}
          </span>

          {/* Save / Bookmark Button */}
          <button
            onClick={() => toggleSaveReel(activeReel.id)}
            className={`p-3 rounded-full backdrop-blur-md transition-all shadow-lg flex flex-col items-center gap-1 ${
              interaction.saved
                ? 'bg-amber-500 text-surface-950 scale-110 font-bold'
                : 'bg-surface-900/80 text-surface-300 hover:text-white border border-surface-700'
            }`}
          >
            <Bookmark size={18} fill={interaction.saved ? 'currentColor' : 'none'} />
          </button>
          <span className="text-[10px] font-mono text-surface-400">
            {interaction.saved ? 'Saved' : 'Save'}
          </span>

          {/* Share Button */}
          <button
            onClick={handleShareClick}
            className={`p-3 rounded-full backdrop-blur-md transition-all shadow-lg flex flex-col items-center gap-1 ${
              interaction.shared
                ? 'bg-accent-cyan text-surface-950 font-bold'
                : 'bg-surface-900/80 text-surface-300 hover:text-white border border-surface-700'
            }`}
          >
            <Share2 size={18} />
          </button>
          <span className="text-[10px] font-mono text-surface-400">
            {copiedShare ? 'Copied' : 'Share'}
          </span>

          {/* Replay Button */}
          <button
            onClick={handleReplayClick}
            className={`p-3 rounded-full backdrop-blur-md transition-all shadow-lg flex flex-col items-center gap-1 ${
              interaction.replayed
                ? 'bg-emerald-500 text-surface-950 font-bold'
                : 'bg-surface-900/80 text-surface-300 hover:text-white border border-surface-700'
            }`}
          >
            <RotateCcw size={18} />
          </button>
          <span className="text-[10px] font-mono text-surface-400">
            {interaction.replayCount ? `x${interaction.replayCount}` : 'Replay'}
          </span>
        </div>

        {/* ── PLAYER FOOTER: TIMELINE & NEXT/PREV ── */}
        <div className="relative z-10 p-4 bg-gradient-to-t from-surface-950 to-surface-950/70 border-t border-surface-800 flex items-center justify-between gap-3">
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="p-2 rounded-lg bg-surface-900 text-surface-300 hover:text-white border border-surface-700"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>

          {/* Vertical scroll shortcuts */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevReel}
              disabled={activeReelIndex === 0}
              className="p-2 rounded-lg bg-surface-900 text-surface-300 hover:text-white border border-surface-700 disabled:opacity-30"
              title="Previous Reel (Up Arrow)"
            >
              <ChevronUp size={16} />
            </button>
            <button
              onClick={nextReel}
              disabled={activeReelIndex === reels.length - 1}
              className="p-2 rounded-lg bg-surface-900 text-surface-300 hover:text-white border border-surface-700 disabled:opacity-30"
              title="Next Reel (Down Arrow)"
            >
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ── RIGHT: REAL-TIME TELEMETRY & ML CONTROLS ── */}
      <div className="w-full max-w-md space-y-4">

        {/* Live Session Telemetry Card */}
        <div className="card p-5 border-brand-500/30 bg-surface-900/80">
          <div className="flex items-center justify-between mb-3 border-b border-surface-800 pb-2">
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-emerald-400 animate-pulse" />
              <h3 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                Live Behavioral Telemetry
              </h3>
            </div>
            <span className="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/30 text-[10px]">
              Active Session
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center mb-4">
            <div className="p-2.5 rounded-xl bg-surface-950/70 border border-surface-800">
              <span className="text-[10px] text-surface-400 block">Reels Explored</span>
              <span className="text-base font-bold text-white font-mono">{activeReelIndex + 1}/25</span>
            </div>
            <div className="p-2.5 rounded-xl bg-surface-950/70 border border-surface-800">
              <span className="text-[10px] text-surface-400 block">Current Watch</span>
              <span className="text-base font-bold text-accent-cyan font-mono">{Math.round(currentWatchPct)}%</span>
            </div>
            <div className="p-2.5 rounded-xl bg-surface-950/70 border border-surface-800">
              <span className="text-[10px] text-surface-400 block">High Intent</span>
              <span className="text-base font-bold text-amber-400 font-mono">
                {interaction.saved || interaction.replayed ? 'Detected' : 'Normal'}
              </span>
            </div>
          </div>

          {/* Active Reel Feature Breakdown */}
          <div className="p-3 rounded-xl bg-surface-950/60 border border-surface-800/80 space-y-1.5 text-xs text-surface-300 mb-4">
            <div className="flex justify-between">
              <span className="text-surface-400">Content Category:</span>
              <span className="font-semibold text-white">{activeReel.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-surface-400">Technical Depth:</span>
              <span className="font-mono text-emerald-400">{Math.round(activeReel.technical_depth * 100)}/100</span>
            </div>
            <div className="flex justify-between">
              <span className="text-surface-400">Hype Score:</span>
              <span className={`font-mono ${activeReel.hype_score > 0.6 ? 'text-rose-400 font-bold' : 'text-surface-400'}`}>
                {Math.round(activeReel.hype_score * 100)}/100 {activeReel.hype_score > 0.6 && '(High Risk)'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-surface-400">Career Relevance:</span>
              <span className="font-mono text-brand-300">{Math.round(activeReel.career_relevance * 100)}%</span>
            </div>
          </div>

          {/* Quick Keyboard Guide */}
          <div className="text-[11px] text-surface-500 flex items-center justify-between font-mono pt-2 border-t border-surface-800">
            <span>↓ / ↑ Scroll</span>
            <span>Space: Pause</span>
            <span>L: Like</span>
            <span>S: Save</span>
          </div>
        </div>

        {/* Primary CTA: Analyze Behavior */}
        <div className="card p-5 border-brand-500/40 bg-gradient-to-br from-brand-950/40 via-surface-900 to-surface-950 glow-brand">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={16} className="text-accent-cyan" />
            <h3 className="text-sm font-bold text-white">Generate ML Behavioral Inference</h3>
          </div>
          <p className="text-xs text-surface-300 leading-relaxed mb-4">
            Transform your active 25-reel watch history, replays, and saves into an explainable Interest DNA and trajectory-aligned recommendation.
          </p>

          <button
            id="analyze-session-btn"
            onClick={handleTriggerAnalysis}
            className="btn-primary w-full py-3.5 text-sm justify-center shadow-xl gap-2 font-bold"
          >
            <span>Analyze My Real Session ({totalInteracted} Events)</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Demo Identity Badge */}
        <div className="p-3 rounded-xl bg-surface-900/60 border border-surface-800 flex items-center justify-between text-xs text-surface-400">
          <div className="flex items-center gap-2">
            <User size={14} className="text-brand-400" />
            <span>Logged in as: <strong className="text-white">{user?.name || 'Demo Student'}</strong></span>
          </div>
          <span className="text-emerald-400 font-mono text-[10px]">Session Active</span>
        </div>
      </div>
    </div>
  );
}
