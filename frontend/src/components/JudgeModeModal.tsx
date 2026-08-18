import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Play,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Award,
  Zap,
  ShieldAlert,
  Brain,
  Compass,
  Sparkles,
  HelpCircle,
  Film,
  HardDrive,
  FileCheck,
  Layers,
} from 'lucide-react';
import { useStore } from '../store/useStore';

export default function JudgeModeModal() {
  const { isJudgeModalOpen, setJudgeModalOpen, judgeStep, setJudgeStep, runTestScenario } = useStore();
  const [activeTab, setActiveTab] = useState<'walkthrough' | 'faq'>('walkthrough');

  if (!isJudgeModalOpen) return null;

  const steps = [
    {
      step: 1,
      tag: 'STEP 1: CORE PROBLEM & PHILOSOPHY',
      title: "Don't Recommend What They Watched. Understand What They Are Becoming.",
      icon: Zap,
      iconColor: 'text-amber-400',
      summary: 'TechLens AI transforms passive short-form video consumption into active engineering developmental trajectories.',
      bullets: [
        'Traditional feeds create superficial echo chambers (watching 1 Java meme leads to 100 more memes).',
        'TechLens separates Content Understanding from Behavioral Intent Inference.',
        'Emergent interests are discovered across cross-content interaction patterns.',
      ],
    },
    {
      step: 2,
      tag: 'STEP 2: REAL DATASET INGESTION',
      title: '28 Real Categorized Short-Form Videos',
      icon: HardDrive,
      iconColor: 'text-brand-400',
      summary: 'Dataset is dynamically scanned across category subfolders without hardcoded file names.',
      bullets: [
        'Discovers videos across DSA_reels, Funny_reels, Motivational_reels, and programming_language.',
        'Folder names serve strictly as Ground Truth Labels for post-hoc evaluation.',
        'Zero Data Leakage: Folder names and filenames are NEVER passed to the AI classifier.',
      ],
    },
    {
      step: 3,
      tag: 'STEP 3: MULTIMODAL VIDEO UNDERSTANDING',
      title: 'Temporal CV & Audio Frame Sampling',
      icon: Film,
      iconColor: 'text-accent-cyan',
      summary: 'Inspects actual video timeline frames rather than superficial metadata.',
      bullets: [
        'Samples frames across 0%, 20%, 40%, 60%, 80%, 100% of duration.',
        'Measures dark IDE ratio, horizontal code edge gradients (Sobel), color saturation, and motion delta.',
        'Extracts timestamped evidence moments clipped within actual video length.',
      ],
    },
    {
      step: 4,
      tag: 'STEP 4: AUTOMATIC LABEL CONFLICT DETECTION',
      title: 'Dataset Label vs AI Prediction Invariance',
      icon: FileCheck,
      iconColor: 'text-emerald-400',
      summary: 'Honestly detects discrepancies when dataset labels do not match actual video content.',
      bullets: [
        'If DSA folder contains a motivational video, TechLens flags "⚠ CONFLICT: Detected motivational content".',
        'Does NOT artificially force predictions to match folder names to fake 100% accuracy.',
        'Automated Robustness Proof verifies 0% influence from filenames or folder paths.',
      ],
    },
    {
      step: 5,
      tag: 'STEP 5: USER BEHAVIOR ENGINE',
      title: 'Weighted Interaction Telemetry',
      icon: Brain,
      iconColor: 'text-purple-400',
      summary: 'Captures continuous behavioral engagement signals instead of binary clicks.',
      bullets: [
        'Measures exact watch percentage, watch duration, replays, likes, saves, and early skips.',
        'Initializes all category weights at neutral (0.0) without predefined biases.',
        'Repeated skips apply directional penalties to downweight irrelevant topics.',
      ],
    },
    {
      step: 6,
      tag: 'STEP 6: HYPE & QUALITY FILTERING',
      title: 'Rejecting Shallow Clickbait Traps',
      icon: ShieldAlert,
      iconColor: 'text-rose-400',
      summary: 'Protects student velocity by filtering low-depth shortcut content.',
      bullets: [
        'Rejects "10 AI Tools That Will Get You a Job in 30 Days" (Hype Risk: 91, Tech Depth: 18).',
        'Exposes a multi-factor Quality Scorecard with clear rejection rationale.',
        'Prioritizes deep tutorials, architectural breakdowns, and system design over marketing fluff.',
      ],
    },
    {
      step: 7,
      tag: 'STEP 7: TRAJECTORY-ALIGNED RECOMMENDATION',
      title: 'Personalized Developmental Next Steps',
      icon: Compass,
      iconColor: 'text-blue-400',
      summary: 'Recommends high-leverage content that accelerates the student’s trajectory.',
      bullets: [
        'Recommends "Advanced Algorithmic Patterns: Sliding Window Invariants & Tree Traversals".',
        'Explores adjacent concepts: Syntax → Data Structures → Backend → System Design.',
        'Provides transparent "WHY THIS REEL?" and "WHY NOT ALTERNATIVES?" comparative proofs.',
      ],
    },
    {
      step: 8,
      tag: 'STEP 8: AUDITABLE GROUND-TRUTH BENCHMARK',
      title: 'Scientifically Defensible Evaluation',
      icon: Award,
      iconColor: 'text-amber-300',
      summary: 'Live precision, recall, macro F1, and confusion matrix calculation.',
      bullets: [
        'Real-time dataset audit table showing exact match and conflict status per reel.',
        'Reports real, calculated metrics without fabricated percentages.',
        'Proves the system understands actual multimodal content end-to-end.',
      ],
    },
  ];

  const judgeQuestions = [
    {
      q: 'Q1: How do you know what the Reel is about?',
      a: 'TechLens samples frames across 0%, 20%, 40%, 60%, 80%, 100% of duration using OpenCV, calculating dark IDE density, horizontal code edge gradients, color saturation, motion variance, and acoustic speech energy to classify the primary topic and content type.',
    },
    {
      q: 'Q2: Are you using the folder name to classify it?',
      a: 'No. The folder name is strictly isolated as datasetLabel (Ground Truth) for evaluation. The AI model analyzes only the raw video bytes, producing an independent predictedCategory without seeing folder or filename metadata.',
    },
    {
      q: 'Q3: What happens if the folder label is wrong?',
      a: 'TechLens automatically detects the discrepancy and flags a "LABEL CONFLICT" with a human-readable diagnostic explanation (e.g. "Dataset label says DSA, but multimodal analysis detected Motivational content").',
    },
    {
      q: 'Q4: How do you understand a funny programming Reel?',
      a: 'TechLens decouples Topic (Programming), Content Type (Comedy), and Category (Entertainment). It recognizes humor as valid engagement without mistaking it for deep algorithmic problem solving.',
    },
    {
      q: 'Q5: How do you infer user interest?',
      a: 'All domain scores start at 0. As the user watches (>80%), likes, saves, and replays reels, weighted behavioral points accrue across related technical pillars, while early skips apply penalties.',
    },
    {
      q: 'Q6: Why did you recommend this Reel?',
      a: 'Every recommendation includes a 12-field structured explainability report detailing exact watch seconds, likes, saves, and the logical connection between observed behavior and the recommended learning trajectory.',
    },
    {
      q: 'Q7: How do you avoid repetitive recommendations?',
      a: 'TechLens models developmental progression. Instead of recommending 50 identical Java reels, it navigates the technical graph: Java Syntax → OOP → Collections → DSA → Distributed Systems.',
    },
    {
      q: 'Q8: How do you avoid AI hype content?',
      a: 'The built-in Hype Filter evaluates Technical Depth, Learning Value, and Hype Risk. Content promising unrealistic shortcuts with near-zero technical substance is automatically rejected with a scorecard reason.',
    },
    {
      q: 'Q9: What makes this different from a normal recommendation system?',
      a: 'Traditional algorithms maximize short-term screen time and trap users in echo chambers. TechLens understands what the student is becoming and guides them toward high-growth technical competence.',
    },
    {
      q: 'Q10: Where is the AI actually being used?',
      a: 'AI is utilized across 4 layers: 1) Multimodal temporal frame analysis & CV feature extraction, 2) Dense vector semantic embeddings, 3) Real-time behavioral affinity inference, and 4) Explainable recommendation scoring.',
    },
  ];

  const current = steps[judgeStep - 1] || steps[0];
  const IconComp = current.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-950/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="card max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border-amber-500/40 bg-surface-900 shadow-2xl relative space-y-5"
        >
          {/* Close button */}
          <button
            onClick={() => setJudgeModalOpen(false)}
            className="absolute top-4 right-4 p-1.5 rounded-lg bg-surface-800 text-surface-400 hover:text-white"
          >
            <X size={18} />
          </button>

          {/* Header & Tab Switcher */}
          <div className="flex items-center justify-between border-b border-surface-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h3 className="text-base font-bold text-white tracking-wide">
                JUDGE EVALUATION & ARCHITECTURE CONSOLE
              </h3>
            </div>

            <div className="flex items-center gap-1 bg-surface-950 p-1 rounded-xl border border-surface-800">
              <button
                onClick={() => setActiveTab('walkthrough')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'walkthrough'
                    ? 'bg-amber-500 text-surface-950 shadow-md'
                    : 'text-surface-400 hover:text-white'
                }`}
              >
                Guided Tour ({judgeStep}/{steps.length})
              </button>
              <button
                onClick={() => setActiveTab('faq')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'faq'
                    ? 'bg-amber-500 text-surface-950 shadow-md'
                    : 'text-surface-400 hover:text-white'
                }`}
              >
                Judge Q&A (10)
              </button>
            </div>
          </div>

          {/* ── TAB 1: GUIDED TOUR ── */}
          {activeTab === 'walkthrough' && (
            <div className="space-y-4">
              {/* Progress bar */}
              <div className="h-1 rounded-full bg-surface-800 overflow-hidden flex">
                {steps.map((s) => (
                  <div
                    key={s.step}
                    className={`flex-1 transition-all duration-300 ${
                      s.step <= judgeStep ? 'bg-amber-400' : 'bg-transparent'
                    }`}
                  />
                ))}
              </div>

              {/* Step Icon & Title */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <IconComp size={24} className={current.iconColor} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-amber-400 block">{current.tag}</span>
                  <h3 className="text-lg font-bold text-white leading-snug">{current.title}</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-surface-300 leading-relaxed bg-surface-950/70 p-3 rounded-xl border border-surface-800">
                {current.summary}
              </p>

              {/* Bullet points */}
              <div className="space-y-2 p-3.5 rounded-2xl bg-surface-950/90 border border-surface-800">
                {current.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-surface-200">
                    <CheckCircle2 size={13} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>

              {/* Quick Scenario Run Buttons for Judges */}
              <div className="p-3 rounded-xl bg-brand-950/30 border border-brand-500/30 space-y-1.5">
                <span className="text-[10px] font-mono text-brand-300 font-bold uppercase block">
                  ⚡ INSTANT JUDGE DEMO SCENARIOS (ONE-CLICK SIMULATION):
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10px]">
                  <button
                    onClick={() => {
                      setJudgeModalOpen(false);
                      runTestScenario('scenario_a_swe');
                    }}
                    className="p-1.5 rounded-lg bg-surface-900 hover:bg-brand-500 hover:text-white border border-surface-700 text-surface-200 transition-all text-center"
                  >
                    Scenario A (SWE)
                  </button>
                  <button
                    onClick={() => {
                      setJudgeModalOpen(false);
                      runTestScenario('scenario_b_gaming_hw');
                    }}
                    className="p-1.5 rounded-lg bg-surface-900 hover:bg-brand-500 hover:text-white border border-surface-700 text-surface-200 transition-all text-center"
                  >
                    Scenario B (Gaming/HW)
                  </button>
                  <button
                    onClick={() => {
                      setJudgeModalOpen(false);
                      runTestScenario('scenario_c_ai_ml');
                    }}
                    className="p-1.5 rounded-lg bg-surface-900 hover:bg-brand-500 hover:text-white border border-surface-700 text-surface-200 transition-all text-center"
                  >
                    Scenario C (AI/ML)
                  </button>
                  <button
                    onClick={() => {
                      setJudgeModalOpen(false);
                      runTestScenario('scenario_d_entertainment');
                    }}
                    className="p-1.5 rounded-lg bg-surface-900 hover:bg-brand-500 hover:text-white border border-surface-700 text-surface-200 transition-all text-center"
                  >
                    Scenario D (Comedy)
                  </button>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  onClick={() => setJudgeStep(Math.max(judgeStep - 1, 1))}
                  disabled={judgeStep === 1}
                  className="btn-ghost text-xs gap-1 disabled:opacity-40"
                >
                  <ArrowLeft size={13} /> Previous
                </button>

                {judgeStep < steps.length ? (
                  <button
                    onClick={() => setJudgeStep(judgeStep + 1)}
                    className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-surface-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-lg"
                  >
                    Next Step ({judgeStep + 1}/{steps.length}) <ArrowRight size={13} />
                  </button>
                ) : (
                  <button
                    onClick={() => setJudgeModalOpen(false)}
                    className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-surface-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-lg"
                  >
                    Start Interactive Lab <Play size={13} />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ── TAB 2: JUDGE FAQ (10 CORE QUESTIONS) ── */}
          {activeTab === 'faq' && (
            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
              {judgeQuestions.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-surface-950 border border-surface-800 space-y-1.5 text-xs">
                  <span className="font-bold text-amber-400 block font-mono text-[11px]">{item.q}</span>
                  <p className="text-surface-300 leading-relaxed text-[11px]">{item.a}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
