import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, TrendingUp, Info } from 'lucide-react';
import type { InterestCluster } from '../types';

interface Props {
  dimension: InterestCluster | null;
  onClose: () => void;
}

export default function DimensionDetailModal({ dimension, onClose }: Props) {
  if (!dimension) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-950/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="card max-w-lg w-full p-6 border-brand-500/40 bg-surface-900 shadow-2xl relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg bg-surface-800 text-surface-400 hover:text-white"
          >
            <X size={16} />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center">
              <TrendingUp size={20} className="text-accent-cyan" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-brand-400 uppercase tracking-wider">
                Dimension Forensic Analysis
              </span>
              <h3 className="text-xl font-bold text-white leading-tight">
                {dimension.label} — {dimension.score}/100
              </h3>
            </div>
          </div>

          <div className="space-y-4">
            {/* Why text */}
            <div className="p-3.5 rounded-xl bg-surface-950/60 border border-surface-800">
              <p className="text-xs font-semibold text-surface-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Info size={12} className="text-brand-400" /> Scoring Justification
              </p>
              <p className="text-xs sm:text-sm text-surface-300 leading-relaxed">
                {dimension.why_text}
              </p>
            </div>

            {/* Supporting Reels */}
            <div>
              <p className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">
                Contributing Reel Evidence ({dimension.supporting_reels.length})
              </p>
              <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                {dimension.supporting_reels.map((title, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2 rounded-lg bg-surface-800/60 border border-surface-700/50 text-xs text-surface-200"
                  >
                    <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0" />
                    <span className="truncate">{title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Behavior Signals */}
            <div>
              <p className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">
                Detected Interaction Signals
              </p>
              <div className="flex flex-wrap gap-1.5">
                {dimension.behavior_signals.map((sig, i) => (
                  <span
                    key={i}
                    className="badge bg-brand-500/15 border-brand-500/30 text-brand-300 text-[11px]"
                  >
                    {sig}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="btn-primary w-full text-xs sm:text-sm mt-6 justify-center"
          >
            Close Forensic View
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
