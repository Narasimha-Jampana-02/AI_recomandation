import { motion } from 'framer-motion';
import { ArrowRight, Eye, Cpu, Layers, Play, Sparkles, Compass, CheckCircle2, UserCheck, Activity, Video, FlaskConical } from 'lucide-react';
import { useStore } from '../store/useStore';
import { INTERACTIVE_25_REELS } from '../data/interactiveReels';
import { analyzeReels, fetchReels } from '../services/api';
import DesignThinkingSection from './DesignThinkingSection';

const features = [
  {
    icon: FlaskConical,
    title: 'Controlled Behavioral Experiment',
    description: 'Directly tests actual short-video interactions from local video files, recording watch completion, replays, saves, and skips.',
  },
  {
    icon: Cpu,
    title: 'Latent Interest Inference',
    description: 'Java + DSA + GitHub + Systems converge into a unified Software Engineering identity with 78% mathematical confidence.',
  },
  {
    icon: Layers,
    title: 'Multi-Factor Quality Filter',
    description: 'Explicitly audits Technical Depth, Learning Value, and Shortcut Risk to reject shallow career hype.',
  },
];

const shallowSteps = [
  'Input: Java Meme Reel (95% watch)',
  '→ Shallow Classifier: Topic = "Java"',
  '→ Echo Chamber: Push 100 more Java jokes',
  'Outcome: Dopamine loop, zero career progression',
];

const deepSteps = [
  'Input: Real Video Stream Interactions (29 Reels)',
  '→ High-Intent Signals: Saved GitHub tips + Replayed System Design',
  '→ Negative Filter: Skipped "10 AI Tools" hype reel',
  '↓ Latent Synthesis: Software Engineering (78% Confidence)',
  '↓ Actionable Leap: Designing Distributed Systems (89% Match)',
];

export default function LandingPage() {
  const { setSection, setReels, setAnalysis, setDemoMode, setJudgeModalOpen, setJudgeStep, startExperiment, fetchExperimentReels, experimentReels } = useStore();

  const handleAnalyzeExisting = async () => {
    const reels = await fetchReels().catch(() => INTERACTIVE_25_REELS);
    setReels(reels);
    setSection('dashboard');
  };

  const handleRunRealWorldExperiment = async () => {
    await fetchExperimentReels();
    startExperiment();
  };

  const handleJudgeDemo = async () => {
    setDemoMode(true);
    const reels = await fetchReels().catch(() => INTERACTIVE_25_REELS);
    setReels(reels);
    setSection('analyzing');
    try {
      const result = await analyzeReels(reels);
      setAnalysis(result);
      setSection('results');
      setJudgeStep(1);
      setJudgeModalOpen(true);
    } catch {
      setSection('dashboard');
    }
  };

  return (
    <div className="min-h-screen">
      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-surface-800/60 bg-surface-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-accent-cyan flex items-center justify-center">
              <Layers size={16} className="text-white" />
            </div>
            <span className="font-bold text-white tracking-tight">TechLens AI</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleRunRealWorldExperiment}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-brand-500/20 border border-brand-500/40 text-brand-300 hover:bg-brand-500/30 transition-all text-xs sm:text-sm font-semibold"
            >
              <FlaskConical size={14} className="text-accent-cyan animate-pulse" />
              <span>Behavior Lab</span>
            </button>
            <button
              id="nav-judge-demo"
              onClick={handleJudgeDemo}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 hover:bg-amber-500/25 transition-all text-xs sm:text-sm font-semibold"
            >
              <Play size={13} />
              <span>Judge Tour (90s)</span>
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-300 text-xs sm:text-sm font-medium mb-6">
              <Sparkles size={14} className="text-accent-cyan" />
              TechLens AI · Multimodal Behavioral Intelligence Lab
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight mb-6"
          >
            THE ALGORITHM KNOWS YOU TOO WELL.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-accent-cyan to-brand-200">
              DON'T TELL US WHAT YOU LIKE. JUST SCROLL.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-surface-300 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            TechLens doesn't just ask what you watched. It understands what your behavior reveals — discovering latent learning intent across 29 multimodal reels.
          </motion.p>

          {/* ── TWO PRIMARY CHOICES (A vs B) ── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 text-left"
          >
            {/* Choice A: Analyze Existing Data */}
            <div className="card p-5 border-surface-800 bg-surface-900/60 hover:border-surface-700 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-surface-400 font-bold block mb-1">
                  Option A
                </span>
                <h3 className="text-base font-bold text-white mb-1.5">Analyze Existing Data</h3>
                <p className="text-xs text-surface-400 leading-relaxed mb-4">
                  Explore and audit pre-computed multimodal student interaction streams.
                </p>
              </div>
              <button
                id="choice-analyze-existing"
                onClick={handleAnalyzeExisting}
                className="btn-secondary text-xs py-2.5 w-full justify-center"
              >
                <span>Open Dataset Explorer</span>
                <ArrowRight size={13} />
              </button>
            </div>

            {/* Choice B: Run Real-World Experiment */}
            <div className="card p-5 border-brand-500/40 bg-gradient-to-br from-brand-950/40 to-surface-900 glow-brand flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-300 font-bold">
                    Option B · Behavior Lab
                  </span>
                  <span className="badge bg-brand-500/20 text-brand-300 border-brand-500/40 text-[9px] font-mono">
                    {experimentReels.length || 29} Videos Loaded
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">Real-World Reel Experiment</h3>
                <p className="text-xs text-surface-300 leading-relaxed mb-4">
                  Experience the live 29-reel vertical feed. Observe real watch retention, replays, and saves.
                </p>
              </div>
              <button
                id="choice-run-experiment"
                onClick={handleRunRealWorldExperiment}
                className="btn-primary text-xs py-2.5 w-full justify-center shadow-lg font-bold"
              >
                <span>Run Real-World Experiment →</span>
              </button>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleJudgeDemo}
              className="text-xs text-amber-400 hover:text-amber-300 font-mono flex items-center gap-1.5"
            >
              <Play size={12} />
              <span>Looking for quick 90s judge demonstration? Click here</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── SHALLOW VS DEEP COMPARISON ── */}
      <section id="how-it-works" className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-mono uppercase tracking-widest text-brand-400 font-semibold mb-2">
              The Fundamental Flaw
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Single-Keyword Echo Chambers vs. Latent Pattern Discovery
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card border-rose-500/25 bg-rose-950/10 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <p className="text-xs font-semibold text-rose-400 uppercase tracking-widest font-mono">
                      Traditional Recommenders
                    </p>
                  </div>
                  <span className="badge bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[10px]">
                    Echo Chamber Loop
                  </span>
                </div>
                <div className="space-y-2">
                  {shallowSteps.map((step, i) => (
                    <div
                      key={i}
                      className="px-3.5 py-2.5 rounded-lg bg-surface-900/60 border border-surface-800 text-surface-300 font-mono text-xs"
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-5 text-xs text-rose-300 font-mono pt-3 border-t border-rose-500/20">
                ⚠️ Traps students in shallow consumption by confusing clicks with developmental intent.
              </p>
            </div>

            <div className="card border-brand-500/40 bg-brand-950/20 glow-brand p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-400 animate-pulse" />
                    <p className="text-xs font-semibold text-brand-300 uppercase tracking-widest font-mono">
                      TechLens AI Behavior Lab
                    </p>
                  </div>
                  <span className="badge bg-brand-500/20 text-brand-300 border border-brand-500/40 text-[10px]">
                    Latent Trajectory
                  </span>
                </div>
                <div className="space-y-2">
                  {deepSteps.map((step, i) => (
                    <div
                      key={i}
                      className={`px-3.5 py-2.5 rounded-lg font-mono text-xs ${
                        i >= 3
                          ? 'bg-brand-500/20 text-brand-100 border border-brand-500/30'
                          : 'bg-surface-900/60 border border-surface-800 text-surface-300'
                      }`}
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-5 text-xs text-brand-300 font-mono pt-3 border-t border-brand-500/20">
                ✨ Discovers latent intent and recommends next developmental milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESIGN THINKING JOURNEY ── */}
      <DesignThinkingSection />

      {/* ── 3 CORE PILLARS ── */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="card-hover p-6 rounded-2xl bg-surface-900/50 border border-surface-800"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/15 border border-brand-500/30 flex items-center justify-center mb-4">
                  <f.icon size={20} className="text-accent-cyan" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">{f.title}</h3>
                <p className="text-surface-400 text-xs sm:text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center card border-brand-500/30 bg-gradient-to-b from-brand-950/40 via-surface-900/50 to-surface-950 p-10 sm:p-12">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-400 mb-2">
            Ready to test your real-world interaction behavior?
          </p>
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-6">
            Launch the TechLens AI Behavior Lab.
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleRunRealWorldExperiment}
              className="btn-primary text-sm px-7 py-3.5 shadow-xl glow-brand w-full sm:w-auto flex items-center justify-center gap-2 font-bold"
            >
              <span>Run Real-World Experiment →</span>
            </button>
            <button
              onClick={handleAnalyzeExisting}
              className="btn-secondary text-sm px-6 py-3 w-full sm:w-auto"
            >
              Analyze Existing Data
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
