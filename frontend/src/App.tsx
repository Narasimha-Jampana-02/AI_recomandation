import { AnimatePresence, motion } from 'framer-motion';
import { Layers, Play, RotateCcw, Activity, User, FlaskConical } from 'lucide-react';
import { useStore } from './store/useStore';
import LandingPage from './components/LandingPage';
import DemoLogin from './components/DemoLogin';
import ReelFeed from './components/ReelFeed';
import Dashboard from './components/Dashboard';
import AnalysisFlow from './components/AnalysisFlow';
import ResultsScreen from './components/ResultsScreen';
import ExperimentView from './components/ExperimentView';
import ExperimentResultsScreen from './components/ExperimentResultsScreen';
import JudgeModeModal from './components/JudgeModeModal';
import { INTERACTIVE_25_REELS } from './data/interactiveReels';
import { analyzeReels } from './services/api';

const PAGE_TRANSITIONS = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.35, ease: 'easeInOut' },
};

function NavBar() {
  const {
    section,
    setSection,
    setReels,
    setAnalysis,
    isDemoMode,
    setDemoMode,
    setJudgeModalOpen,
    setJudgeStep,
    user,
    resetAll,
    startExperiment,
    fetchExperimentReels,
  } = useStore();

  const handleJudgeDemo = async () => {
    setDemoMode(true);
    setReels(INTERACTIVE_25_REELS);
    setSection('analyzing');
    try {
      const result = await analyzeReels(INTERACTIVE_25_REELS);
      setAnalysis(result);
      setSection('results');
      setJudgeStep(1);
      setJudgeModalOpen(true);
    } catch {
      setSection('dashboard');
    }
  };

  const handleReset = () => {
    resetAll();
  };

  if (section === 'landing') return null;

  const isExperimentMode = section === 'experiment' || section === 'experiment_results';

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-surface-800/60 bg-surface-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          id="nav-logo"
          onClick={handleReset}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-accent-cyan flex items-center justify-center">
            <Layers size={16} className="text-white" />
          </div>
          <span className="font-bold text-white tracking-tight">TechLens AI</span>
        </button>

        {/* Dynamic Mode Switcher / Breadcrumbs */}
        <div className="hidden md:flex items-center gap-2">
          {isExperimentMode ? (
            <div className="flex items-center gap-2 bg-surface-900 px-3 py-1.5 rounded-xl border border-surface-800">
              <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-300">
                <FlaskConical size={14} className="text-accent-cyan" /> Behavior Lab Experiment
              </span>
              <div className="w-2.5 h-px bg-surface-700" />
              <span className="text-[11px] font-mono text-surface-400">
                {section === 'experiment' ? 'Controlled Observation' : 'Behavioral Analysis'}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              {[
                { id: 'feed', label: 'Interactive Feed', step: 1 },
                { id: 'dashboard', label: 'Dataset View', step: 2 },
                { id: 'analyzing', label: 'ML Inference', step: 3 },
                { id: 'results', label: 'Interest DNA', step: 4 },
              ].map(({ id, label, step }) => {
                const sectionOrder: Record<string, number> = { feed: 1, dashboard: 2, analyzing: 3, results: 4 };
                const current = sectionOrder[section] ?? 0;
                const isDone = sectionOrder[id] < current;
                const isActive = id === section;

                return (
                  <div key={id} className="flex items-center gap-1">
                    <button
                      onClick={() => {
                        if (id === 'feed' || id === 'dashboard') setSection(id as any);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-brand-500/20 text-brand-300 border border-brand-500/30'
                          : isDone
                          ? 'text-emerald-400 hover:text-white'
                          : 'text-surface-500'
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          isActive
                            ? 'bg-brand-500 text-white'
                            : isDone
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-surface-700 text-surface-500'
                        }`}
                      >
                        {isDone ? '✓' : step}
                      </span>
                      {label}
                    </button>
                    {step < 4 && <div className="w-3 h-px bg-surface-700" />}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {!isExperimentMode && (
            <button
              onClick={async () => {
                await fetchExperimentReels();
                startExperiment();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-500/20 border border-brand-500/40 text-brand-300 hover:bg-brand-500/30 transition-all text-xs font-semibold"
            >
              <FlaskConical size={13} className="text-accent-cyan" />
              <span className="hidden sm:inline">Behavior Lab</span>
            </button>
          )}

          {user && (
            <span className="badge bg-surface-800 text-surface-300 border-surface-700 text-xs hidden sm:flex items-center gap-1 font-mono">
              <User size={11} className="text-brand-400" />
              {user.name.split(' ')[0]}
            </span>
          )}

          <button id="nav-reset" onClick={handleReset} className="btn-ghost text-sm gap-1.5">
            <RotateCcw size={13} />
            <span className="hidden sm:inline">Home</span>
          </button>

          <button
            id="judge-demo-nav"
            onClick={handleJudgeDemo}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 hover:bg-amber-500/25 transition-all text-xs sm:text-sm font-semibold"
          >
            <Play size={13} />
            <span>Judge Tour</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  const { section } = useStore();

  return (
    <div className="min-h-screen bg-surface-950 text-white">
      <NavBar />
      <div className={section !== 'landing' ? 'pt-16' : ''}>
        <AnimatePresence mode="wait">
          {section === 'landing' && (
            <motion.div key="landing" {...PAGE_TRANSITIONS}>
              <LandingPage />
            </motion.div>
          )}
          {section === 'login' && (
            <motion.div key="login" {...PAGE_TRANSITIONS}>
              <DemoLogin />
            </motion.div>
          )}
          {section === 'feed' && (
            <motion.div key="feed" {...PAGE_TRANSITIONS}>
              <ReelFeed />
            </motion.div>
          )}
          {section === 'dashboard' && (
            <motion.div key="dashboard" {...PAGE_TRANSITIONS}>
              <Dashboard />
            </motion.div>
          )}
          {section === 'analyzing' && (
            <motion.div key="analyzing" {...PAGE_TRANSITIONS}>
              <AnalysisFlow />
            </motion.div>
          )}
          {section === 'results' && (
            <motion.div key="results" {...PAGE_TRANSITIONS}>
              <ResultsScreen />
            </motion.div>
          )}
          {section === 'experiment' && (
            <motion.div key="experiment" {...PAGE_TRANSITIONS}>
              <ExperimentView />
            </motion.div>
          )}
          {section === 'experiment_results' && (
            <motion.div key="experiment_results" {...PAGE_TRANSITIONS}>
              <ExperimentResultsScreen />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <JudgeModeModal />
    </div>
  );
}
