import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code, Briefcase, Brain, Monitor, GitBranch, Zap, Server, Gamepad2, Shield,
  Heart, Bookmark, Share2, RotateCcw, SkipForward, Eye, ArrowRight, Play,
  type LucideIcon, Activity, Filter,
} from 'lucide-react';
import type { Reel } from '../types';
import { useStore } from '../store/useStore';
import { analyzeReels } from '../services/api';

const ICON_MAP: Record<string, LucideIcon> = {
  Code, Briefcase, Brain, Monitor, GitBranch, Zap, Server, Gamepad2, Shield,
};

const SIGNAL_CONFIG = {
  strong_positive: { label: 'Strong Intent', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' },
  moderate_positive: { label: 'Moderate', color: 'text-brand-300', bg: 'bg-brand-500/10 border-brand-500/30' },
  weak_positive: { label: 'Peripheral', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' },
  strong_negative: { label: 'Negative / Skipped', color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/30' },
};

function ReelCard({ reel, index }: { reel: Reel; index: number }) {
  const { sessionInteractions } = useStore();
  const inter = sessionInteractions[reel.id] || {
    watchPercentage: reel.watch_percentage,
    liked: reel.liked,
    saved: reel.saved,
    shared: reel.shared,
    replayed: reel.replayed,
    skipped: reel.skipped,
  };

  const IconComp = ICON_MAP[reel.icon] || Code;

  // Signal type
  let signalType: keyof typeof SIGNAL_CONFIG = 'weak_positive';
  if (inter.skipped || inter.watchPercentage < 30) signalType = 'strong_negative';
  else if (inter.watchPercentage >= 85 && (inter.saved || inter.replayed || inter.shared)) signalType = 'strong_positive';
  else if (inter.watchPercentage >= 60) signalType = 'moderate_positive';

  const signalCfg = SIGNAL_CONFIG[signalType];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.5) }}
      className={`card p-4 rounded-2xl flex flex-col justify-between transition-all ${
        inter.skipped ? 'border-rose-500/25 bg-rose-950/10 opacity-75' : 'bg-surface-900/60 border-surface-800'
      }`}
    >
      {/* Card Header */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2.5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${reel.thumbnail_color}20`, border: `1px solid ${reel.thumbnail_color}40` }}
            >
              <IconComp size={18} className="text-white" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-surface-400 block">0{index + 1} · {reel.subtopic}</span>
              <span
                className="badge text-[10px] font-semibold border"
                style={{
                  background: `${reel.thumbnail_color}15`,
                  borderColor: `${reel.thumbnail_color}30`,
                  color: reel.thumbnail_color,
                }}
              >
                {reel.category}
              </span>
            </div>
          </div>

          <span className={`badge text-[10px] font-mono border ${signalCfg.bg} ${signalCfg.color}`}>
            {signalCfg.label}
          </span>
        </div>

        {/* Title & description */}
        <h3 className="text-sm font-bold text-white leading-snug mb-1.5 line-clamp-2">
          {reel.title}
        </h3>
        <p className="text-xs text-surface-400 leading-relaxed line-clamp-2 mb-3">
          {reel.description}
        </p>
      </div>

      {/* Watch bar & behavioral signals */}
      <div className="pt-3 border-t border-surface-800/80 space-y-2">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-surface-400">Watch Retention:</span>
          <span className="font-mono font-bold text-white">{inter.watchPercentage}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-surface-800 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              inter.skipped ? 'bg-rose-500' : 'bg-brand-400'
            }`}
            style={{ width: `${inter.watchPercentage}%` }}
          />
        </div>

        {/* Action icons status */}
        <div className="flex items-center justify-between pt-1 text-xs">
          <div className="flex items-center gap-2">
            <span title="Liked" className={inter.liked ? 'text-rose-400 font-bold' : 'text-surface-600'}>
              <Heart size={13} fill={inter.liked ? 'currentColor' : 'none'} />
            </span>
            <span title="Saved" className={inter.saved ? 'text-amber-400 font-bold' : 'text-surface-600'}>
              <Bookmark size={13} fill={inter.saved ? 'currentColor' : 'none'} />
            </span>
            <span title="Shared" className={inter.shared ? 'text-accent-cyan font-bold' : 'text-surface-600'}>
              <Share2 size={13} />
            </span>
            <span title="Replayed" className={inter.replayed ? 'text-emerald-400 font-bold' : 'text-surface-600'}>
              <RotateCcw size={13} />
            </span>
          </div>

          <span className="text-[10px] font-mono text-surface-400">
            Depth: {Math.round(reel.technical_depth * 100)}/100
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Dashboard() {
  const { reels, setSection, setAnalysis, setIsAnalyzing, setError, sessionInteractions, finalizeSessionSummary } = useStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Programming', 'System Design', 'DSA', 'Developer Tools', 'Cloud', 'Career', 'Hype', 'Hardware'];

  const filteredReels = selectedCategory === 'All'
    ? reels
    : reels.filter((r) => r.category.toLowerCase() === selectedCategory.toLowerCase() || (selectedCategory === 'Cloud' && r.category === 'DevOps'));

  const handleAnalyze = async () => {
    const summary = finalizeSessionSummary();
    setSection('analyzing');
    setIsAnalyzing(true);
    setError(null);
    try {
      const result = await analyzeReels(reels, sessionInteractions, summary);
      setAnalysis(result);
    } catch (err) {
      setError('Analysis failed. Using client-side fallback.');
      setIsAnalyzing(false);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto pt-6 space-y-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="badge bg-brand-500/20 text-brand-300 border-brand-500/40 text-xs font-mono">
                Multimodal Interaction Dataset ({reels.length} Reels)
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
              Student Interaction Stream
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSection('feed')}
              className="btn-secondary text-xs sm:text-sm py-2 px-3.5 flex items-center gap-1.5"
            >
              <Activity size={14} className="text-accent-cyan" />
              <span>Open 25-Reel Feed</span>
            </button>

            <button
              id="dashboard-analyze-btn"
              onClick={handleAnalyze}
              className="btn-primary text-xs sm:text-sm py-2 px-4 shadow-lg glow-brand flex items-center gap-2 font-bold"
            >
              <span>Analyze Pattern</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Category filter pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <Filter size={13} className="text-surface-500 mr-1 flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-medium border transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-brand-500 text-white border-brand-400'
                  : 'bg-surface-900 text-surface-400 border-surface-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 25 Reels Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredReels.map((reel, index) => (
            <ReelCard key={reel.id} reel={reel} index={index} />
          ))}
        </div>

        {/* Bottom Floating Bar */}
        <div className="p-4 rounded-2xl bg-surface-900/90 border border-brand-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p className="text-sm font-bold text-white">Ready to discover latent learning intent?</p>
            <p className="text-xs text-surface-400">Run the 8-stage deterministic ML engine across all interactions.</p>
          </div>
          <button
            onClick={handleAnalyze}
            className="btn-primary text-sm px-6 py-2.5 shadow-lg"
          >
            <span>Run Behavioral Inference Pipeline</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
}
