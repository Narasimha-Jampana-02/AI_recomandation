import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Zap, FileText } from 'lucide-react';
import type { InferredInterest } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  interest: InferredInterest;
}

export default function InteractiveEvidenceDrawer({ isOpen, onClose, interest }: Props) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="card max-w-2xl w-full p-6 border-brand-500/40 bg-surface-900 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg bg-surface-800 text-surface-400 hover:text-white"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center flex-shrink-0">
              <FileText size={24} className="text-accent-cyan" />
            </div>
            <div>
              <span className="text-xs font-mono text-brand-400 uppercase tracking-widest font-semibold">
                Traceable Evidence Chain
              </span>
              <h2 className="text-2xl font-black text-white">
                {interest.primary_label} ({interest.confidence_percent}%)
              </h2>
            </div>
          </div>

          {/* Confidence Formula Breakdown */}
          <div className="p-4 rounded-2xl bg-brand-950/40 border border-brand-500/30 mb-6">
            <p className="text-xs font-semibold text-brand-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Zap size={14} className="text-accent-cyan" /> Mathematical Confidence Breakdown
            </p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded-xl bg-surface-900/60 border border-surface-800">
                <span className="text-[10px] text-surface-400 block">Base Convergence</span>
                <span className="text-sm font-bold font-mono text-white">
                  +{interest.confidence_formula_breakdown.base_convergence}%
                </span>
              </div>
              <div className="p-2 rounded-xl bg-surface-900/60 border border-surface-800">
                <span className="text-[10px] text-surface-400 block">High-Intent Bonus</span>
                <span className="text-sm font-bold font-mono text-emerald-400">
                  +{interest.confidence_formula_breakdown.high_intent_bonus}%
                </span>
              </div>
              <div className="p-2 rounded-xl bg-surface-900/60 border border-surface-800">
                <span className="text-[10px] text-surface-400 block">Variance Penalty</span>
                <span className="text-sm font-bold font-mono text-rose-400">
                  -{interest.confidence_formula_breakdown.contradiction_penalty}%
                </span>
              </div>
            </div>
            <p className="text-[11px] text-surface-400 text-center mt-2 font-mono">
              Formula: {interest.confidence_formula_breakdown.base_convergence}% + {interest.confidence_formula_breakdown.high_intent_bonus}% - {interest.confidence_formula_breakdown.contradiction_penalty}% = <strong>{interest.confidence_percent}%</strong>
            </p>
          </div>

          {/* Supporting Reels */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-3">
              Supporting High-Intent Reel Interactions ({interest.supporting_reels.length})
            </h3>
            <div className="space-y-2">
              {interest.supporting_reels.map((reel) => (
                <div
                  key={reel.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-surface-950/60 border border-surface-800/80 gap-3"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white truncate">{reel.title}</p>
                    <p className="text-xs text-surface-400 mt-0.5">
                      Category: <span className="text-surface-300">{reel.category}</span> · Watch: <span className="text-accent-cyan font-mono">{reel.watch_percentage}%</span>
                    </p>
                  </div>
                  <span className="badge bg-brand-500/15 border-brand-500/30 text-brand-300 text-xs font-mono flex-shrink-0">
                    {reel.key_signal}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting Signals List */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">
              Semantic Signal Convergence
            </h3>
            <div className="space-y-1.5">
              {interest.supporting_signals.map((sig, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-surface-300">
                  <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{sig}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contradictory & Uncertainty Signals */}
          <div className="p-4 rounded-2xl bg-surface-950/80 border border-surface-800 space-y-3">
            <div>
              <span className="text-[11px] font-mono text-surface-400 uppercase tracking-wider font-semibold block mb-1">
                Contradictory / Low-Intent Signals Detected
              </span>
              {interest.contradictory_signals.map((sig, i) => (
                <p key={i} className="text-xs text-surface-400 leading-relaxed">
                  • {sig}
                </p>
              ))}
            </div>

            <div className="pt-2 border-t border-surface-800/80">
              <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold block mb-0.5">
                Model Uncertainty Boundary
              </span>
              <p className="text-xs text-surface-400 leading-relaxed">
                {interest.uncertainty_note}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="btn-primary w-full text-sm mt-6 justify-center"
          >
            Close Traceability Chain
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
