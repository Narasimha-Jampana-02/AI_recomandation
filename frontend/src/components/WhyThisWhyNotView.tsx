import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import type { WhyThisWhyNot } from '../types';

interface Props {
  data: WhyThisWhyNot;
}

export default function WhyThisWhyNotView({ data }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="card p-6"
    >
      <div className="flex items-center gap-2 mb-2">
        <HelpCircle size={18} className="text-accent-cyan" />
        <h3 className="text-lg font-bold text-white">Comparative Recommendation Reasoning</h3>
      </div>
      <p className="text-xs text-surface-400 mb-6">
        Explaining not just why this candidate won, but why alternative candidates were explicitly dismissed.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* WHY THIS? */}
        <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                WHY THIS?
              </span>
            </div>
            <h4 className="text-base font-bold text-white mb-4 leading-snug">
              {data.why_this.title}
            </h4>
            <div className="space-y-2.5">
              {data.why_this.reasons.map((reason, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-surface-200">
                  <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 pt-3 border-t border-emerald-500/20 text-[11px] text-emerald-300 font-mono">
            STATUS: Prioritized for immediate skill expansion
          </div>
        </div>

        {/* WHY NOT THAT? */}
        <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-rose-400 font-bold">
                WHY NOT THAT?
              </span>
            </div>
            <h4 className="text-base font-bold text-surface-300 mb-4 leading-snug line-through opacity-80">
              {data.why_not.title}
            </h4>
            <div className="space-y-2.5">
              {data.why_not.reasons.map((reason, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-surface-400">
                  <XCircle size={15} className="text-rose-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 pt-3 border-t border-rose-500/20 text-[11px] text-rose-300 font-mono">
            STATUS: Filtered out to protect learning velocity
          </div>
        </div>
      </div>
    </motion.div>
  );
}
