import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle, ArrowRight, XCircle } from 'lucide-react';
import type { QualityScorecard } from '../types';

interface Props {
  scorecard?: QualityScorecard;
}

export default function QualityScorecardView({ scorecard }: Props) {
  if (!scorecard) return null;

  const metrics = [
    { label: 'Technical Depth', value: scorecard.technical_depth, max: 100, isGood: scorecard.technical_depth >= 60 },
    { label: 'Learning Value', value: scorecard.learning_value, max: 100, isGood: scorecard.learning_value >= 60 },
    { label: 'Specificity', value: scorecard.specificity, max: 100, isGood: scorecard.specificity >= 50 },
    { label: 'Practical Value', value: scorecard.practical_value, max: 100, isGood: scorecard.practical_value >= 50 },
    { label: 'Hype Risk', value: scorecard.hype_risk, max: 100, isGood: scorecard.hype_risk < 40 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="card border-rose-500/25 bg-gradient-to-br from-rose-950/20 via-surface-900/40 to-surface-950 p-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 border-b border-rose-500/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
            <ShieldAlert size={20} className="text-rose-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-rose-400 font-semibold">
                Content Quality Scorecard
              </span>
              <span className="badge bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[11px] font-bold">
                <XCircle size={10} /> {scorecard.status}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white leading-tight mt-0.5">
              "{scorecard.title}"
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto bg-surface-950/60 px-3 py-1.5 rounded-lg border border-surface-800">
          <span className="text-xs text-surface-400">Shortcut Risk:</span>
          <span className="text-xs font-black text-rose-400 font-mono">{scorecard.shortcut_promise}</span>
        </div>
      </div>

      {/* Multi-Factor Quality Bars */}
      <div className="grid sm:grid-cols-5 gap-3 mb-6">
        {metrics.map((m) => (
          <div key={m.label} className="p-3 rounded-xl bg-surface-900/60 border border-surface-800/80">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-surface-400 text-[11px]">{m.label}</span>
              <span className={`font-mono font-bold ${m.isGood ? 'text-emerald-400' : 'text-rose-400'}`}>
                {m.value}
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-surface-800 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  m.isGood ? 'bg-emerald-500' : 'bg-rose-500'
                }`}
                style={{ width: `${m.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Rejection Reason & Alternative */}
      <div className="grid md:grid-cols-2 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/20">
          <p className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <XCircle size={13} /> Why Rejected
          </p>
          <p className="text-surface-300 text-xs sm:text-sm leading-relaxed">{scorecard.reason}</p>
        </div>

        <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <CheckCircle size={13} /> Selected High-Depth Alternative
          </p>
          <p className="text-white font-medium text-xs sm:text-sm leading-relaxed mb-2">
            "{scorecard.alternative_recommended}"
          </p>
          <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
            <span>Evaluated & prioritized below</span>
            <ArrowRight size={12} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
