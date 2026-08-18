import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Loader2 } from 'lucide-react';
import { useStore } from '../store/useStore';
import { analyzeReels } from '../services/api';

const PIPELINE_STEPS = [
  { id: 1, label: 'Analyzing content…', detail: 'Topic extraction · Hype detection · Educational depth scoring' },
  { id: 2, label: 'Analyzing engagement…', detail: 'Watch % · Replay · Save · Like · Share · Skip signals' },
  { id: 3, label: 'Connecting topics…', detail: 'Building semantic topic graph across all 8 reels' },
  { id: 4, label: 'Comparing behavior…', detail: 'Weighting each signal by interaction strength' },
  { id: 5, label: 'Finding hidden patterns…', detail: 'Cross-reel cluster analysis · Interest vector generation' },
  { id: 6, label: 'Inferring underlying interest…', detail: 'Primary interest · Confidence scoring · Evidence mapping' },
  { id: 7, label: 'Applying quality filter…', detail: 'Rejecting hype · Selecting high-value recommendation' },
  { id: 8, label: 'Generating explanation…', detail: 'Human-readable reasoning · Evidence chain' },
];

const STEP_DELAY = 600; // ms per step

export default function AnalysisFlow() {
  const { reels, setSection, setAnalysis } = useStore();
  const [currentStep, setCurrentStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      // Start analysis in background
      const analysisPromise = analyzeReels(reels);

      // Animate steps
      for (let i = 0; i < PIPELINE_STEPS.length; i++) {
        if (cancelled) return;
        await new Promise((r) => setTimeout(r, STEP_DELAY));
        if (cancelled) return;
        setCurrentStep(i + 1);
      }

      // Wait for analysis result
      try {
        const result = await analysisPromise;
        if (!cancelled) {
          setAnalysis(result);
          setDone(true);
          await new Promise((r) => setTimeout(r, 800));
          if (!cancelled) setSection('results');
        }
      } catch {
        if (!cancelled) setSection('dashboard');
      }
    };

    run();
    return () => { cancelled = true; };
  }, [reels, setAnalysis, setSection]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            {done ? (
              <CheckCircle size={28} className="text-emerald-400" />
            ) : (
              <Loader2 size={28} className="text-brand-400 animate-spin" />
            )}
          </div>
          <h2 className="text-3xl font-bold text-white">
            {done ? 'Analysis Complete' : 'Analyzing your reel pattern…'}
          </h2>
          <p className="text-surface-400 mt-2 text-sm">
            TechLens is reasoning across {reels.length} reels to discover your underlying technology interest
          </p>
        </motion.div>

        {/* Pipeline steps */}
        <div className="space-y-3">
          {PIPELINE_STEPS.map((step, i) => {
            const isActive = currentStep === step.id;
            const isDone = currentStep > step.id;
            const isPending = currentStep < step.id;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{
                  opacity: isPending ? 0.3 : 1,
                  x: 0,
                }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`pipeline-step ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center">
                  {isDone ? (
                    <CheckCircle size={18} className="text-emerald-400" />
                  ) : isActive ? (
                    <Loader2 size={18} className="text-brand-400 animate-spin" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-surface-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p
                    className={`font-medium text-sm ${
                      isDone
                        ? 'text-emerald-300'
                        : isActive
                        ? 'text-white'
                        : 'text-surface-500'
                    }`}
                  >
                    {step.label}
                  </p>
                  <AnimatePresence>
                    {(isActive || isDone) && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-surface-500 text-xs mt-0.5"
                      >
                        {step.detail}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                {isDone && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-xs text-emerald-500 font-medium"
                  >
                    ✓
                  </motion.span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="mt-8 h-1 rounded-full bg-surface-800 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-cyan"
            animate={{ width: `${(currentStep / PIPELINE_STEPS.length) * 100}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-surface-500">
          <span>Step {Math.max(currentStep, 1)} of {PIPELINE_STEPS.length}</span>
          <span>{Math.round((currentStep / PIPELINE_STEPS.length) * 100)}%</span>
        </div>
      </div>
    </div>
  );
}
