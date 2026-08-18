import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck, Zap, ArrowRight, ShieldAlert } from 'lucide-react';
import type { SystemLearnedSummary } from '../types';

interface Props {
  summary: SystemLearnedSummary;
  onOpenEvidence: () => void;
}

export default function SystemLearnedSummaryView({ summary, onOpenEvidence }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="card border-brand-500/30 bg-gradient-to-br from-brand-950/20 via-surface-900/50 to-surface-950 p-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-surface-800 pb-3">
        <div className="flex items-center gap-2">
          <Award size={20} className="text-accent-cyan" />
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">
            What TechLens Learned
          </h3>
        </div>
        <span className="badge bg-brand-500/20 text-brand-300 border-brand-500/40 text-xs font-mono">
          Confidence: {summary.confidence}%
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {/* Primary Interest & Emerging Direction */}
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-surface-950/60 border border-surface-800/80">
            <span className="text-[11px] font-mono text-surface-400 uppercase tracking-wider block">
              Inferred Primary Identity
            </span>
            <p className="text-xl font-black text-white mt-0.5">
              {summary.primary_interest}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-950/60 border border-surface-800/80">
            <span className="text-[11px] font-mono text-accent-cyan uppercase tracking-wider block">
              Emerging Direction
            </span>
            <p className="text-sm font-bold text-surface-200 mt-0.5">
              {summary.emerging_direction}
            </p>
          </div>
        </div>

        {/* Strong Signals & Avoided */}
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-surface-950/60 border border-surface-800/80">
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
              Strong Signals Converging ({summary.evidence_count} interactions)
            </span>
            <div className="flex flex-wrap gap-1.5">
              {summary.strong_signals.map((sig, i) => (
                <span
                  key={i}
                  className="badge bg-emerald-500/10 border-emerald-500/30 text-emerald-300 text-[11px]"
                >
                  <CheckCircle2 size={10} /> {sig}
                </span>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-950/60 border border-surface-800/80">
            <span className="text-[11px] font-mono text-rose-400 uppercase tracking-wider block mb-1">
              Down-Weighted / Filtered
            </span>
            <div className="flex flex-wrap gap-1.5">
              {summary.avoided.map((av, i) => (
                <span
                  key={i}
                  className="badge bg-rose-500/10 border-rose-500/30 text-rose-300 text-[11px]"
                >
                  <ShieldAlert size={10} /> {av}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <p className="text-xs text-surface-400 leading-relaxed max-w-xl">
          {summary.why_differentiated}
        </p>
        <button
          onClick={onOpenEvidence}
          className="btn-secondary text-xs sm:text-sm py-2 px-4 whitespace-nowrap flex items-center gap-1.5"
        >
          <span>Audit Evidence Chain</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </motion.div>
  );
}
