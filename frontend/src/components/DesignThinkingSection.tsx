import { motion } from 'framer-motion';
import { Lightbulb, Compass, Users, Target, Rocket, RefreshCw, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export default function DesignThinkingSection() {
  const stages = [
    {
      step: '01',
      title: 'Empathize',
      icon: Users,
      color: 'text-brand-400',
      summary: 'Students spend hours on educational reels but feel trapped in repetitive loops without progression.',
    },
    {
      step: '02',
      title: 'Define',
      icon: Target,
      color: 'text-amber-400',
      summary: 'Traditional recommender algorithms optimize for single-keyword clicks rather than developmental intent.',
    },
    {
      step: '03',
      title: 'Ideate',
      icon: Lightbulb,
      color: 'text-accent-cyan',
      summary: 'Infer latent higher-order technical goals from cross-content interaction signatures (Replay, Save, Skip).',
    },
    {
      step: '04',
      title: 'Prototype',
      icon: Rocket,
      color: 'text-emerald-400',
      summary: 'Built an interactive 25-reel behavioral environment with real-time vector embeddings and quality gates.',
    },
    {
      step: '05',
      title: 'Test & Iterate',
      icon: RefreshCw,
      color: 'text-purple-400',
      summary: 'Closed-loop adaptive calibration allowing student feedback to recalibrate future recommendation trajectories.',
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 border-t border-surface-800">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-400 font-semibold mb-2">
            Methodology & Innovation
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Design Thinking Journey
          </h2>
          <p className="text-xs sm:text-sm text-surface-400 mt-2">
            How TechLens AI moved from observing student scrolling frustration to an explainable behavioral intelligence engine.
          </p>
        </div>

        {/* 5-Stage Progression Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {stages.map((st) => (
            <div
              key={st.step}
              className="card p-4 rounded-2xl bg-surface-900/50 border border-surface-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold text-surface-500">{st.step}</span>
                  <st.icon size={16} className={st.color} />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{st.title}</h4>
                <p className="text-xs text-surface-400 leading-relaxed">{st.summary}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Before vs After Visual Comparison */}
        <div className="card p-6 sm:p-8 border-brand-500/30 bg-surface-900/90 glow-brand">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 text-center">
            Before vs. After Paradigm Shift
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* BEFORE */}
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <XCircle size={16} className="text-rose-400" />
                  <span className="text-xs font-mono uppercase tracking-widest text-rose-400 font-bold">
                    BEFORE: Shallow Keyword Recommenders
                  </span>
                </div>
                <div className="space-y-2 text-xs font-mono text-surface-300">
                  <div className="p-2.5 rounded bg-surface-950/80 border border-surface-800">
                    User watches 1 Java meme reel
                  </div>
                  <div className="text-center text-surface-500">↓</div>
                  <div className="p-2.5 rounded bg-surface-950/80 border border-surface-800">
                    Classifier extracts tag: "Java"
                  </div>
                  <div className="text-center text-surface-500">↓</div>
                  <div className="p-2.5 rounded bg-rose-950/40 border border-rose-500/20 text-rose-300">
                    Pushes 100 more basic Java jokes
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-rose-300/80 mt-4 pt-3 border-t border-rose-500/20 font-mono">
                Outcome: Traps students in shallow dopamine loops with zero progression.
              </p>
            </div>

            {/* AFTER */}
            <div className="p-5 rounded-2xl bg-brand-950/30 border border-brand-500/40 glow-brand flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={16} className="text-accent-cyan" />
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-300 font-bold">
                    AFTER: TechLens Behavioral Intelligence
                  </span>
                </div>
                <div className="space-y-2 text-xs font-mono text-surface-200">
                  <div className="p-2.5 rounded bg-surface-950/80 border border-surface-800">
                    Java + DSA + GitHub + Systems + Behavior
                  </div>
                  <div className="text-center text-brand-400">↓</div>
                  <div className="p-2.5 rounded bg-surface-950/80 border border-surface-800">
                    Discovers Latent Software Engineering (77%)
                  </div>
                  <div className="text-center text-brand-400">↓</div>
                  <div className="p-2.5 rounded bg-brand-500/20 border border-brand-500/40 text-brand-100 font-bold">
                    Recommends: Designing Distributed Systems (89%)
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-accent-cyan mt-4 pt-3 border-t border-brand-500/20 font-mono">
                Outcome: Propels students toward professional software engineering mastery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
