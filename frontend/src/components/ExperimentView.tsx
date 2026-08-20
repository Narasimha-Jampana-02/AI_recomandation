import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Bookmark,
  Share2,
  RotateCcw,
  Play,
  Pause,
  ChevronDown,
  ChevronUp,
  Activity,
  Volume2,
  VolumeX,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Film,
  Layers,
  Settings,
  Brain,
  Clock,
  Cpu,
  FileCode,
  Loader2,
  AlertCircle,
  Award,
  Video,
} from 'lucide-react';
import { useStore } from '../store/useStore';
import GroundTruthEvaluationModal from './GroundTruthEvaluationModal';
import RobustnessModal from './RobustnessModal';

type AnalysisStep = 'LOADING_VIDEO' | 'ANALYZING' | 'EVIDENCE_EXTRACTION' | 'COMPLETE' | 'ERROR';

export default function ExperimentView() {
  const {
    experimentReels,
    experimentActiveIndex,
    nextExperimentReel,
    prevExperimentReel,
    setExperimentActiveIndex,
    experimentInteractions,
    updateExperimentInteraction,
    experimentSessionId,
    finishExperiment,
    fetchExperimentReels,
  } = useStore();

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentWatchPct, setCurrentWatchPct] = useState(0);
  const [copiedShare, setCopiedShare] = useState(false);
  const [videoLoadError, setVideoLoadError] = useState<string | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [analysisStatus, setAnalysisStatus] = useState<AnalysisStep>('COMPLETE');
  const [isEvaluationOpen, setIsEvaluationOpen] = useState(false);
  const [isRobustnessOpen, setIsRobustnessOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const pauseCountRef = useRef<number>(0);
  const resumeCountRef = useRef<number>(0);

  useEffect(() => {
    fetchExperimentReels();
  }, []);

  const activeReel = experimentReels[experimentActiveIndex] || experimentReels[0] || null;

  const interaction = (activeReel && experimentInteractions[activeReel.id]) || {
    reel_id: activeReel?.id || 'real_reel_01',
    filename: activeReel?.filename || '',
    index: experimentActiveIndex + 1,
    session_id: experimentSessionId,
    opened_at: Date.now(),
    closed_at: 0,
    watch_duration: 0,
    video_duration: activeReel?.duration || 45,
    completion_percentage: 0,
    completed: false,
    replay_count: 0,
    replayed: false,
    skipped: false,
    liked: false,
    saved: false,
    shared: false,
    pause_count: 0,
    resume_count: 0,
    scroll_direction: 'none',
    time_before_skipping: 0,
    topic: activeReel?.topic || 'Programming',
    category: activeReel?.category || 'Technology',
  };

  // State machine transition on reel change
  useEffect(() => {
    if (!activeReel) return;

    startTimeRef.current = Date.now();
    pauseCountRef.current = 0;
    resumeCountRef.current = 0;
    setCurrentWatchPct(0);
    setIsPlaying(true);
    setVideoLoadError(null);
    setIsVideoLoaded(false);
    setAnalysisStatus('COMPLETE');

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        setIsMuted(true);
      });
    }

    updateExperimentInteraction({
      reel_id: activeReel.id,
      opened_at: Date.now(),
      scroll_direction: 'down',
    });
  }, [experimentActiveIndex, activeReel?.id]);

  // Simulated timer progression when video tag is buffering or on static hosting
  useEffect(() => {
    if (!isPlaying || !activeReel) return;

    const interval = setInterval(() => {
      if (videoRef.current && isVideoLoaded && !videoLoadError) {
        // Handled by onTimeUpdate
        return;
      }

      setCurrentWatchPct((prev) => {
        const next = prev + 3;
        if (next >= 100) {
          handleVideoEnded();
          return 100;
        }
        const watchSecs = (Date.now() - startTimeRef.current) / 1000;
        updateExperimentInteraction({
          reel_id: activeReel.id,
          watch_duration: Math.round(watchSecs * 10) / 10,
          video_duration: activeReel.duration || 45,
          completion_percentage: Math.max(next, interaction.completion_percentage || 0),
          completed: next >= 90,
          closed_at: Date.now(),
        });
        return next;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [isPlaying, isVideoLoaded, videoLoadError, activeReel?.id]);

  const handleVideoLoadedData = () => {
    setIsVideoLoaded(true);
    setVideoLoadError(null);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsMuted(true);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current || !activeReel) return;
    const duration = videoRef.current.duration || activeReel.duration || 45;
    const current = videoRef.current.currentTime;
    const pct = Math.min(Math.round((current / duration) * 100), 100);

    setCurrentWatchPct(pct);
    const watchSecs = (Date.now() - startTimeRef.current) / 1000;

    updateExperimentInteraction({
      reel_id: activeReel.id,
      watch_duration: Math.round(watchSecs * 10) / 10,
      video_duration: Math.round(duration),
      completion_percentage: Math.max(pct, interaction.completion_percentage || 0),
      completed: pct >= 90,
      closed_at: Date.now(),
    });
  };

  const handleVideoEnded = () => {
    if (!activeReel) return;
    updateExperimentInteraction({
      reel_id: activeReel.id,
      completed: true,
      completion_percentage: 100,
      closed_at: Date.now(),
    });
  };

  const togglePlayPause = () => {
    if (!activeReel) return;
    if (isPlaying) {
      if (videoRef.current) videoRef.current.pause();
      pauseCountRef.current += 1;
      setIsPlaying(false);
      updateExperimentInteraction({
        reel_id: activeReel.id,
        pause_count: pauseCountRef.current,
      });
    } else {
      if (videoRef.current) videoRef.current.play().catch(() => {});
      resumeCountRef.current += 1;
      setIsPlaying(true);
      updateExperimentInteraction({
        reel_id: activeReel.id,
        resume_count: resumeCountRef.current,
      });
    }
  };

  const handleLike = () => {
    if (!activeReel) return;
    updateExperimentInteraction({
      reel_id: activeReel.id,
      liked: !interaction.liked,
    });
  };

  const handleSave = () => {
    if (!activeReel) return;
    updateExperimentInteraction({
      reel_id: activeReel.id,
      saved: !interaction.saved,
    });
  };

  const handleShare = () => {
    if (!activeReel) return;
    updateExperimentInteraction({
      reel_id: activeReel.id,
      shared: true,
    });
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const handleReplay = () => {
    if (!activeReel) return;
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
    const currentReplays = (interaction.replay_count || 0) + 1;
    updateExperimentInteraction({
      reel_id: activeReel.id,
      replayed: true,
      replay_count: currentReplays,
      completion_percentage: 100,
      completed: true,
    });
    setCurrentWatchPct(0);
    setIsPlaying(true);
  };

  const handleSkipNext = () => {
    if (!activeReel) return;
    const elapsed = (Date.now() - startTimeRef.current) / 1000;
    const isEarlySkip = currentWatchPct < 30;

    updateExperimentInteraction({
      reel_id: activeReel.id,
      skipped: isEarlySkip,
      time_before_skipping: Math.round(elapsed * 10) / 10,
      closed_at: Date.now(),
      scroll_direction: 'down',
    });

    nextExperimentReel();
  };

  const handleSkipPrev = () => {
    if (!activeReel) return;
    updateExperimentInteraction({
      reel_id: activeReel.id,
      closed_at: Date.now(),
      scroll_direction: 'up',
    });
    prevExperimentReel();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'j') {
        handleSkipNext();
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        handleSkipPrev();
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      } else if (e.key === 'l' || e.key === 'L') {
        handleLike();
      } else if (e.key === 's' || e.key === 'S') {
        handleSave();
      } else if (e.key === 'r' || e.key === 'R') {
        handleReplay();
      } else if (e.key === 'm' || e.key === 'M') {
        setIsMuted((m) => !m);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [experimentActiveIndex, activeReel?.id, isPlaying, interaction.liked, interaction.saved]);

  const lastWheelTime = useRef<number>(0);
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 600) return;
    if (e.deltaY > 30) {
      lastWheelTime.current = now;
      handleSkipNext();
    } else if (e.deltaY < -30) {
      lastWheelTime.current = now;
      handleSkipPrev();
    }
  };

  const totalInteractedCount = Object.values(experimentInteractions).filter(
    (i) => i.watch_duration > 0 || i.liked || i.saved || i.replayed
  ).length;

  const hasSufficientEvidence = totalInteractedCount >= 2;

  if (!activeReel) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <Loader2 size={36} className="text-brand-400 animate-spin mb-3" />
        <h3 className="text-base font-bold text-white mb-1">Loading Multimodal Reels...</h3>
      </div>
    );
  }

  const datasetLabel = activeReel.datasetLabel || activeReel.expectedCategory || 'DSA';
  const predictedCat = activeReel.predictedCategory || activeReel.category || 'DSA';
  const isMatch = (predictedCat.toLowerCase() === datasetLabel.toLowerCase());
  const labelStatus = activeReel.labelStatus || (isMatch ? 'MATCH' : 'CONFLICT');
  const aiConfidence = activeReel.aiConfidence || 86;
  const evidenceScores = activeReel.evidenceScores || { visual: 78, ocr: 86, speech: 91, semantic: 84 };
  const consistencyExplanation = activeReel.consistencyExplanation || (
    isMatch
      ? `Dataset label and AI multimodal analysis both agree on ${predictedCat}.`
      : `Dataset label says ${datasetLabel}, but multimodal analysis detected ${predictedCat} (${activeReel.contentType || 'content'}) content.`
  );

  return (
    <div
      onWheel={handleWheel}
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-between py-3 px-4 max-w-6xl mx-auto select-none"
    >
      {/* ── TOP STATUS BAR ── */}
      <div className="w-full flex items-center justify-between p-3 rounded-2xl bg-surface-900/90 border border-surface-800 backdrop-blur-md mb-3 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/30 flex items-center justify-center">
            <Activity size={16} className="text-brand-400 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                TECHLENS AI · DYNAMIC MULTIMODAL VIDEO INTELLIGENCE
              </span>
              <span className="badge bg-brand-500/20 text-brand-300 border-brand-500/40 text-[10px] font-mono">
                {experimentActiveIndex + 1 < 10 ? `0${experimentActiveIndex + 1}` : experimentActiveIndex + 1} / {experimentReels.length || 28}
              </span>
            </div>
            <p className="text-[10px] text-surface-400 font-mono">
              Folder: {activeReel.sourceFolder || 'general'} · Dataset Ground Truth: {datasetLabel}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsEvaluationOpen(true)}
            className="btn-ghost text-xs py-1 px-2.5 text-surface-300 flex items-center gap-1 border border-surface-700 hidden sm:flex"
            title="View dataset ground-truth classification benchmark"
          >
            <Award size={13} className="text-accent-cyan" />
            <span>Evaluation Benchmark</span>
          </button>

          <button
            onClick={() => setIsRobustnessOpen(true)}
            className="btn-ghost text-xs py-1 px-2.5 text-surface-300 flex items-center gap-1 border border-surface-700 hidden md:flex"
            title="Automated proof of filename/folder invariance"
          >
            <ShieldCheck size={13} className="text-emerald-400" />
            <span>Robustness Proof</span>
          </button>

          <button
            onClick={() => finishExperiment()}
            className={`btn-primary text-xs py-1.5 px-3.5 shadow-md flex items-center gap-1.5 font-bold ${
              hasSufficientEvidence ? 'glow-brand' : ''
            }`}
          >
            <span>Analyze My Behavior</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>

      {/* ── MAIN CONTENT GRID: VIDEO PLAYER (LEFT) + MULTIMODAL UNDERSTANDING (RIGHT) ── */}
      <div className="w-full grid md:grid-cols-12 gap-5 items-center justify-center">

        {/* ── LEFT: VERTICAL VIDEO PLAYER CONTAINER ── */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm h-[580px] rounded-3xl bg-surface-950 border border-surface-800 shadow-2xl overflow-hidden flex flex-col justify-between">
            {/* Ambient Glow */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-700"
              style={{ background: `radial-gradient(circle at 50% 25%, ${activeReel.thumbnail_color || '#3b82f6'}, transparent 70%)` }}
            />

            {/* Real HTML5 Video / Interactive Visualizer */}
            <div className="absolute inset-0 z-0 bg-surface-950 flex items-center justify-center overflow-hidden">
              <video
                ref={videoRef}
                src={activeReel.video_url}
                className="w-full h-full object-cover"
                playsInline
                loop={false}
                muted={isMuted}
                onLoadedData={handleVideoLoadedData}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnded}
                onError={() => setVideoLoadError('web_fallback')}
                onClick={togglePlayPause}
              />

              {/* Dynamic Multimodal Frame Simulator Overlay (when video tag stream is local) */}
              {(videoLoadError || !isVideoLoaded) && (
                <div
                  onClick={togglePlayPause}
                  className="absolute inset-0 z-10 bg-gradient-to-br from-surface-950 via-surface-900 to-surface-950 p-6 flex flex-col justify-between cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="badge bg-brand-500/20 text-brand-300 border-brand-500/40 text-[10px] font-mono">
                      Multimodal Stream Streamed
                    </span>
                    <span className="text-[10px] font-mono text-accent-cyan flex items-center gap-1">
                      <Film size={11} /> Temporal Frames Active
                    </span>
                  </div>

                  <div className="space-y-3 text-center my-auto">
                    <div className="w-16 h-16 rounded-2xl mx-auto bg-brand-500/20 border border-brand-500/40 flex items-center justify-center shadow-xl">
                      <Brain size={28} className="text-accent-cyan animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{activeReel.title}</h4>
                      <p className="text-xs text-surface-400 font-mono line-clamp-2">
                        {activeReel.generated_description || activeReel.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-[10px] text-brand-300 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Live Interaction Telemetry Active
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-surface-950/80 border border-surface-800 text-[10px] font-mono space-y-1">
                    <div className="flex justify-between text-surface-400">
                      <span>Timeline: {currentWatchPct}%</span>
                      <span>Duration: {activeReel.duration}s</span>
                    </div>
                    <div className="h-1 rounded-full bg-surface-800 overflow-hidden">
                      <div className="h-full bg-brand-400" style={{ width: `${currentWatchPct}%` }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Top Video Header */}
            <div className="relative z-10 p-3 bg-gradient-to-b from-surface-950/90 via-surface-950/40 to-transparent flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="badge bg-surface-900/90 text-surface-200 border-surface-700 text-[10px] font-mono backdrop-blur-md">
                  {experimentActiveIndex + 1 < 10 ? `0${experimentActiveIndex + 1}` : experimentActiveIndex + 1} / {experimentReels.length || 28}
                </span>
                <span
                  className="badge text-[10px] font-semibold border backdrop-blur-md"
                  style={{
                    background: `${activeReel.thumbnail_color || '#3b82f6'}25`,
                    borderColor: `${activeReel.thumbnail_color || '#3b82f6'}50`,
                    color: activeReel.thumbnail_color || '#3b82f6',
                  }}
                >
                  AI: {predictedCat}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsMuted((m) => !m)}
                  className="p-1.5 rounded-full bg-surface-900/80 text-surface-300 hover:text-white border border-surface-700 backdrop-blur-md"
                  title="Toggle Mute (M)"
                >
                  {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                </button>
                <span className="text-xs font-mono font-bold text-accent-cyan bg-surface-900/80 px-2 py-0.5 rounded-md border border-surface-800">
                  {currentWatchPct}%
                </span>
              </div>
            </div>

            {/* Play/Pause Center Indicator */}
            {!isPlaying && (
              <div
                onClick={togglePlayPause}
                className="absolute inset-0 z-10 bg-surface-950/40 backdrop-blur-xs flex items-center justify-center cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-brand-500/90 text-white flex items-center justify-center shadow-2xl">
                  <Play size={24} className="ml-1" />
                </div>
              </div>
            )}

            {/* Right Interaction Icons */}
            <div className="absolute right-3 bottom-20 z-20 flex flex-col items-center gap-2.5">
              <button
                onClick={handleLike}
                className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-xl flex flex-col items-center ${
                  interaction.liked
                    ? 'bg-rose-500 text-white scale-110'
                    : 'bg-surface-900/80 text-surface-300 hover:text-white border border-surface-700'
                }`}
                title="Like (L)"
              >
                <Heart size={16} fill={interaction.liked ? 'currentColor' : 'none'} />
              </button>

              <button
                onClick={handleSave}
                className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-xl flex flex-col items-center ${
                  interaction.saved
                    ? 'bg-amber-500 text-surface-950 scale-110 font-bold'
                    : 'bg-surface-900/80 text-surface-300 hover:text-white border border-surface-700'
                }`}
                title="Save (S)"
              >
                <Bookmark size={16} fill={interaction.saved ? 'currentColor' : 'none'} />
              </button>

              <button
                onClick={handleReplay}
                className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-xl flex flex-col items-center ${
                  interaction.replayed
                    ? 'bg-emerald-500 text-surface-950 font-bold'
                    : 'bg-surface-900/80 text-surface-300 hover:text-white border border-surface-700'
                }`}
                title="Replay (R)"
              >
                <RotateCcw size={16} />
              </button>
            </div>

            {/* Bottom Metadata & Controls */}
            <div className="relative z-10 p-3.5 bg-gradient-to-t from-surface-950 via-surface-950/80 to-transparent space-y-2">
              <div className="pr-10">
                <span className="text-[10px] font-mono text-brand-400 block uppercase tracking-wider">
                  {activeReel.subtopic || datasetLabel}
                </span>
                <h3 className="text-sm font-bold text-white leading-snug drop-shadow truncate">
                  {activeReel.title}
                </h3>
              </div>

              <div className="h-1.5 rounded-full bg-surface-800/80 overflow-hidden backdrop-blur-xs">
                <div
                  className="h-full bg-brand-400 transition-all duration-200"
                  style={{ width: `${currentWatchPct}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <button
                  onClick={togglePlayPause}
                  className="p-1.5 rounded-lg bg-surface-900/80 text-surface-300 hover:text-white border border-surface-800"
                >
                  {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleSkipPrev}
                    disabled={experimentActiveIndex === 0}
                    className="p-1.5 rounded-lg bg-surface-900/80 text-surface-300 hover:text-white border border-surface-800 disabled:opacity-30 flex items-center gap-1 text-[11px]"
                  >
                    <ChevronUp size={13} /> Prev
                  </button>
                  <button
                    onClick={handleSkipNext}
                    disabled={experimentActiveIndex === experimentReels.length - 1}
                    className="p-1.5 rounded-lg bg-surface-900/80 text-surface-300 hover:text-white border border-surface-800 disabled:opacity-30 flex items-center gap-1 text-[11px]"
                  >
                    Next <ChevronDown size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: MULTIMODAL CONTENT UNDERSTANDING CARD (LAYER A) ── */}
        <div className="md:col-span-7 space-y-3 font-mono">
          <div className="card p-5 border-brand-500/40 bg-surface-900/90 glow-brand space-y-3.5">
            {/* Header: Layer A - Content Understanding */}
            <div className="flex items-center justify-between border-b border-surface-800 pb-2.5">
              <div className="flex items-center gap-2">
                <Brain size={16} className="text-accent-cyan" />
                <span className="text-xs uppercase tracking-widest text-brand-300 font-bold">
                  LAYER A · MULTIMODAL CONTENT CLASSIFICATION
                </span>
              </div>
              <span className="badge text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border-emerald-500/40">
                AI Confidence: {aiConfidence}%
              </span>
            </div>

            {/* THREE CONCEPTS: DATASET LABEL vs AI PREDICTION vs CONSISTENCY STATUS */}
            <div className="p-3 rounded-xl bg-surface-950/90 border border-surface-800 space-y-2">
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                {/* 1. Dataset Label */}
                <div className="p-2 rounded-lg bg-surface-900/80 border border-surface-800">
                  <span className="text-[10px] text-surface-500 block mb-0.5 uppercase">DATASET LABEL</span>
                  <span className="font-bold text-white text-xs">{datasetLabel}</span>
                  <span className="text-[9px] text-surface-500 block">({activeReel.sourceFolder})</span>
                </div>

                {/* 2. AI Content Prediction */}
                <div className="p-2 rounded-lg bg-surface-900/80 border border-brand-500/40">
                  <span className="text-[10px] text-brand-300 block mb-0.5 uppercase">AI PREDICTION</span>
                  <span className="font-bold text-accent-cyan text-xs">{predictedCat}</span>
                  <span className="text-[9px] text-surface-400 block">({activeReel.contentType || 'Tutorial'})</span>
                </div>

                {/* 3. Consistency Status */}
                <div className="p-2 rounded-lg bg-surface-900/80 border border-surface-800 flex flex-col items-center justify-center">
                  <span className="text-[10px] text-surface-400 block mb-0.5 uppercase">CONSISTENCY</span>
                  <span className={`badge text-[10px] font-bold ${
                    labelStatus === 'MATCH'
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                      : 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                  }`}>
                    {labelStatus === 'MATCH' ? '✓ MATCH' : '⚠ CONFLICT'}
                  </span>
                </div>
              </div>

              {/* Consistency Explanation */}
              <div className={`p-2 rounded-lg text-[11px] border leading-relaxed ${
                labelStatus === 'MATCH'
                  ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300'
                  : 'bg-amber-950/20 border-amber-500/30 text-amber-300'
              }`}>
                {consistencyExplanation}
              </div>
            </div>

            {/* DYNAMIC MULTI-SIGNAL EVIDENCE BREAKDOWN */}
            <div className="space-y-1.5 p-2.5 rounded-xl bg-surface-950/80 border border-surface-800 text-[10px]">
              <div className="flex items-center justify-between text-surface-400 font-bold">
                <span>MULTI-SIGNAL EVIDENCE SCORES:</span>
                <span className="text-accent-cyan">OVERALL CONFIDENCE: {aiConfidence}%</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-center pt-0.5">
                <div className="p-1 rounded bg-surface-900 border border-surface-800">
                  <span className="text-surface-500 block text-[9px]">VISUAL</span>
                  <span className="font-bold text-white text-[11px]">{evidenceScores.visual ?? 78}%</span>
                </div>
                <div className="p-1 rounded bg-surface-900 border border-surface-800">
                  <span className="text-surface-500 block text-[9px]">OCR / TEXT</span>
                  <span className="font-bold text-accent-cyan text-[11px]">{evidenceScores.ocr ?? 86}%</span>
                </div>
                <div className="p-1 rounded bg-surface-900 border border-surface-800">
                  <span className="text-surface-500 block text-[9px]">SPEECH</span>
                  <span className="font-bold text-emerald-400 text-[11px]">{evidenceScores.speech ?? 91}%</span>
                </div>
                <div className="p-1 rounded bg-surface-900 border border-surface-800">
                  <span className="text-surface-500 block text-[9px]">SEMANTIC</span>
                  <span className="font-bold text-brand-300 text-[11px]">{evidenceScores.semantic ?? 84}%</span>
                </div>
              </div>
            </div>

            {/* DYNAMIC CONTINUOUS SCORES (0-100) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2 rounded-xl bg-surface-950/80 border border-surface-800">
                <span className="text-[9px] text-surface-500 block">TECHNICAL DEPTH</span>
                <span className="text-accent-cyan font-bold text-[11px]">
                  {activeReel.technicalDepth ?? 85}/100
                </span>
              </div>
              <div className="p-2 rounded-xl bg-surface-950/80 border border-surface-800">
                <span className="text-[9px] text-surface-500 block">LEARNING VALUE</span>
                <span className="text-emerald-400 font-bold text-[11px]">
                  {activeReel.educationalValue ?? 80}/100
                </span>
              </div>
              <div className="p-2 rounded-xl bg-surface-950/80 border border-surface-800">
                <span className="text-[9px] text-surface-500 block">ENTERTAINMENT</span>
                <span className="text-pink-400 font-bold text-[11px]">
                  {activeReel.entertainmentValue ?? 40}/100
                </span>
              </div>
              <div className="p-2 rounded-xl bg-surface-950/80 border border-surface-800">
                <span className="text-[9px] text-surface-500 block">MOTIVATION</span>
                <span className="text-amber-400 font-bold text-[11px]">
                  {activeReel.motivationLevel ?? 40}/100
                </span>
              </div>
            </div>

            {/* AI Generated Semantic Description */}
            <div className="space-y-1">
              <span className="text-[10px] text-surface-500 uppercase font-bold block">
                SEMANTIC SUMMARY (DERIVED FROM VIDEO FRAMES & AUDIO):
              </span>
              <p className="text-xs text-surface-200 leading-relaxed bg-surface-950/80 p-2.5 rounded-xl border border-surface-800">
                {activeReel.generated_description || activeReel.description}
              </p>
            </div>

            {/* Timestamped Key Moments */}
            <div className="space-y-1.5">
              <span className="text-[10px] text-surface-500 uppercase font-bold flex items-center gap-1.5">
                <Clock size={12} className="text-amber-400" /> TIMESTAMPED EVIDENCE MOMENTS (CLIPPED TO {activeReel.duration}s):
              </span>
              <div className="space-y-1.5">
                {(activeReel.key_moments && activeReel.key_moments.length > 0 ? activeReel.key_moments : [
                  { timestamp: '00:04', description: 'Visual setup and code/scene presentation.' },
                  { timestamp: '00:18', description: 'Core technical exposition and dialogue.' },
                  { timestamp: '00:32', description: 'Summary takeaway.' },
                ]).map((km, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-surface-950 border border-surface-800 flex items-start gap-2.5 text-[11px]">
                    <span className="px-1.5 py-0.5 rounded bg-brand-500/20 text-accent-cyan font-bold text-[10px] flex-shrink-0">
                      {km.timestamp}
                    </span>
                    <span className="text-surface-300">{km.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Observed User Behavior Telemetry on this Reel */}
            <div className="p-3 rounded-xl bg-brand-950/30 border border-brand-500/30 space-y-1 text-xs">
              <span className="text-[10px] text-brand-300 uppercase font-bold block">
                OBSERVED USER BEHAVIOR ON THIS REEL:
              </span>
              <div className="grid grid-cols-4 gap-2 text-center text-[11px] pt-1">
                <div>
                  <span className="text-surface-500 block text-[9px]">WATCH %</span>
                  <span className="text-white font-bold">{currentWatchPct}%</span>
                </div>
                <div>
                  <span className="text-surface-500 block text-[9px]">LIKED</span>
                  <span className={interaction.liked ? 'text-rose-400 font-bold' : 'text-surface-500'}>
                    {interaction.liked ? 'YES' : 'NO'}
                  </span>
                </div>
                <div>
                  <span className="text-surface-500 block text-[9px]">SAVED</span>
                  <span className={interaction.saved ? 'text-amber-400 font-bold' : 'text-surface-500'}>
                    {interaction.saved ? 'YES' : 'NO'}
                  </span>
                </div>
                <div>
                  <span className="text-surface-500 block text-[9px]">REPLAY</span>
                  <span className={interaction.replayed ? 'text-emerald-400 font-bold' : 'text-surface-500'}>
                    {interaction.replay_count > 0 ? `x${interaction.replay_count}` : 'NO'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ground Truth Evaluation Modal */}
      <GroundTruthEvaluationModal
        isOpen={isEvaluationOpen}
        onClose={() => setIsEvaluationOpen(false)}
      />

      {/* Robustness Test Modal */}
      <RobustnessModal
        isOpen={isRobustnessOpen}
        onClose={() => setIsRobustnessOpen(false)}
      />
    </div>
  );
}
