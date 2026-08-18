import { motion } from 'framer-motion';
import { Compass, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import type { LearningTrajectory } from '../types';

interface Props {
  trajectory: LearningTrajectory;
}

export default function LearningTrajectoryView({ trajectory }: Props) {
  const stages = [
    {
      key: 'current',
      title: trajectory.current.stage,
      badge: 'Observed Baseline',
      badgeColor: 'bg-surface-700/60 text-surface-300 border-surface-600',
      topics: trajectory.current.topics,
      desc: trajectory.current.description,
      isNext: false,
    },
    {
      key: 'developing',
      title: trajectory.developing.stage,
      badge: 'Active Growth',
      badgeColor: 'bg-brand-500/20 text-brand-300 border-brand-500/40',
      topics: trajectory.developing.topics,
      desc: trajectory.developing.description,
      isNext: false,
    },
    {
      key: 'emerging',
      title: trajectory.emerging.stage,
      badge: 'Recommended Frontier',
      badgeColor: 'bg-accent-cyan/20 text-accent-cyan border-accent-cyan/40',
      topics: trajectory.emerging.topics,
      desc: trajectory.emerging.description,
      isNext: true,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="card p-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <Compass size={20} className="text-brand-400" />
          <h3 className="text-lg font-bold text-white">Your Inferred Learning Trajectory</h3>
        </div>
        <span className="text-xs font-mono text-surface-400">
          "Understand what they are becoming"
        </span>
      </div>
      <p className="text-xs text-surface-400 mb-6">
        A progressive developmental roadmap inferred from your cross-content interaction velocity.
      </p>

      {/* 3-Stage Progression */}
      <div className="grid md:grid-cols-3 gap-4 relative mb-6">
        {stages.map((stage, i) => (
          <div
            key={stage.key}
            className={`p-5 rounded-2xl border flex flex-col justify-between transition-all ${
              stage.isNext
                ? 'bg-brand-950/30 border-brand-500/40 glow-brand'
                : 'bg-surface-900/40 border-surface-800/80'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono font-bold text-surface-500">STAGE 0{i + 1}</span>
                <span className={`badge text-[10px] font-semibold border ${stage.badgeColor}`}>
                  {stage.badge}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-2">{stage.title}</h4>
              <div className="space-y-1.5 mb-3">
                {stage.topics.map((t, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs text-surface-300">
                    <CheckCircle2 size={12} className={stage.isNext ? 'text-accent-cyan' : 'text-surface-500'} />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[11px] text-surface-400 pt-3 border-t border-surface-800 leading-relaxed">
              {stage.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Potential Direction Target Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-950/60 via-surface-900/80 to-brand-950/40 border border-brand-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/40 flex items-center justify-center flex-shrink-0">
            <Sparkles size={18} className="text-accent-cyan" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-brand-300 font-semibold">
                {trajectory.potential_direction.stage}
              </span>
              <span className="badge bg-brand-500/20 text-brand-300 border-brand-500/40 text-[10px]">
                Confidence: {trajectory.potential_direction.confidence}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
              {trajectory.potential_direction.title}
            </h4>
          </div>
        </div>
        <p className="text-xs text-surface-400 max-w-sm leading-relaxed">
          {trajectory.potential_direction.description}
        </p>
      </div>
    </motion.div>
  );
}
