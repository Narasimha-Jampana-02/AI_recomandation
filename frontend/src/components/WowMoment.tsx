import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, Check, ShieldAlert } from 'lucide-react';
import type { WowMomentData } from '../types';

interface Props {
  data: WowMomentData;
}

export default function WowMoment({ data }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="card relative overflow-hidden border-brand-500/40 bg-gradient-to-b from-brand-950/40 via-surface-900/60 to-surface-950/80 glow-brand p-6 sm:p-8"
    >
      {/* Background ambient lighting */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-40 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-64 h-32 bg-accent-cyan/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles size={12} className="text-accent-cyan" />
          The Breakthrough Pattern
        </div>
        <span className="text-xs font-mono text-surface-400">Zero Explicit Search Queries</span>
      </div>

      {/* Main Punchline */}
      <div className="text-center my-6 space-y-2">
        <p className="text-xs sm:text-sm font-mono tracking-widest text-surface-400 uppercase">
          Behavioral Intelligence Revelation
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          YOU NEVER SAID THIS.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-accent-cyan to-brand-300">
            BUT YOUR BEHAVIOR DID.
          </span>
        </h2>
      </div>

      {/* The Revelation Grid */}
      <div className="grid md:grid-cols-11 gap-4 items-center my-8">
        {/* Left: What You Watched */}
        <div className="md:col-span-5 rounded-2xl bg-surface-950/60 border border-surface-800/80 p-4 sm:p-5">
          <p className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-surface-500" />
            Surface Content Consumed
          </p>
          <div className="space-y-2">
            {data.watched_topics.map((topic, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-900/60 border border-surface-800/50 text-xs sm:text-sm text-surface-300 font-mono"
              >
                <span className="text-surface-500 text-[11px]">0{i + 1}</span>
                <span className="truncate">{topic}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-surface-500 mt-3 italic">
            Shallow algorithms would simply push more Java jokes or laptop specs.
          </p>
        </div>

        {/* Center: Transformation Arrow */}
        <div className="md:col-span-1 flex flex-col items-center justify-center my-2 md:my-0">
          <div className="hidden md:flex flex-col items-center gap-1 text-brand-400">
            <div className="w-0.5 h-6 bg-gradient-to-b from-transparent to-brand-500" />
            <div className="w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/40 flex items-center justify-center">
              <Sparkles size={14} />
            </div>
            <div className="w-0.5 h-6 bg-gradient-to-b from-brand-500 to-transparent" />
          </div>
          <div className="md:hidden flex items-center gap-2 text-brand-400">
            <ArrowDown size={18} />
          </div>
        </div>

        {/* Right: What TechLens Discovered */}
        <div className="md:col-span-5 rounded-2xl bg-brand-950/30 border border-brand-500/30 p-4 sm:p-5 glow-brand">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-brand-300 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              Latent Deeper Intent
            </p>
            <span className="px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold font-mono">
              {data.confidence}% CONFIDENCE
            </span>
          </div>

          <div className="space-y-1.5 mb-4">
            {data.discovered_components.map((comp, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-500/10 border border-brand-500/20 text-xs sm:text-sm text-brand-100"
              >
                <Check size={12} className="text-accent-cyan flex-shrink-0" />
                <span>{comp}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-brand-500/20 text-center">
            <p className="text-[11px] uppercase tracking-widest text-surface-400 font-mono mb-1">
              Synthesized Identity
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {data.latent_interest.toUpperCase()}
            </h3>
          </div>
        </div>
      </div>

      {/* Footer explanation */}
      <div className="rounded-xl bg-surface-900/40 border border-surface-800/60 p-3 sm:p-4 text-xs text-surface-300 leading-relaxed flex items-center gap-3">
        <ShieldAlert size={16} className="text-brand-400 flex-shrink-0 hidden sm:block" />
        <span>
          <strong>Why this matters for students:</strong> While traditional recommendation feeds trap students in recursive dopamine loops of shallow jokes, TechLens extracts the latent trajectory to recommend career-defining engineering disciplines.
        </span>
      </div>
    </motion.div>
  );
}
