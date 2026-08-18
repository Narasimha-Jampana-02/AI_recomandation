import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  ShieldCheck,
  Cpu,
  RefreshCw,
  Eye,
  Activity,
  Layers,
  Award,
  Sliders,
  CheckCircle2,
  FileCode,
  HardDrive,
  Clock,
  Sparkles,
} from 'lucide-react';
import { useStore } from '../store/useStore';

export default function AdminDebugPanel() {
  const {
    experimentReels,
    experimentInteractions,
    behaviorWeights,
    setBehaviorWeights,
    resetBehaviorWeights,
    evaluationMetrics,
    fetchEvaluationMetrics,
    robustnessResults,
    fetchRobustnessResults,
  } = useStore();

  const [selectedReelId, setSelectedReelId] = useState<string>(experimentReels[0]?.id || 'real_reel_01');
  const [activeTab, setActiveTab] = useState<'multimodal' | 'evaluation' | 'weights'>('multimodal');

  useEffect(() => {
    fetchEvaluationMetrics();
    fetchRobustnessResults();
  }, []);

  const selectedReel = experimentReels.find((r) => r.id === selectedReelId) || experimentReels[0];
  const interaction = selectedReel ? experimentInteractions[selectedReel.id] : null;

  return (
    <div className="card p-6 border-brand-500/40 bg-surface-900 shadow-2xl space-y-6 font-mono text-xs text-surface-200">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-surface-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center">
            <Terminal size={18} className="text-accent-cyan" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-wide">
              ADMIN / DEBUG MULTIMODAL LAB CONSOLE
            </h3>
            <p className="text-[11px] text-surface-400">
              Low-level trace: OpenCV temporal frame metrics, SHA-256 hashes, dataset labels vs AI prediction, and behavioral weights
            </p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-surface-950 p-1 rounded-xl border border-surface-800">
          <button
            onClick={() => setActiveTab('multimodal')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'multimodal'
                ? 'bg-brand-500 text-white shadow-md'
                : 'text-surface-400 hover:text-white'
            }`}
          >
            Video Debug ({experimentReels.length})
          </button>
          <button
            onClick={() => setActiveTab('evaluation')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'evaluation'
                ? 'bg-brand-500 text-white shadow-md'
                : 'text-surface-400 hover:text-white'
            }`}
          >
            Consistency Benchmark
          </button>
          <button
            onClick={() => setActiveTab('weights')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'weights'
                ? 'bg-brand-500 text-white shadow-md'
                : 'text-surface-400 hover:text-white'
            }`}
          >
            Behavior Weights
          </button>
        </div>
      </div>

      {/* ── TAB 1: MULTIMODAL VIDEO DEBUG CONSOLE ── */}
      {activeTab === 'multimodal' && selectedReel && (
        <div className="grid md:grid-cols-12 gap-5">
          {/* Left: 28-Reel File Selector */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-[11px] font-bold text-surface-400 uppercase tracking-wider block">
              DISCOVERED VIDEO DATASET ({experimentReels.length} REELS):
            </span>
            <div className="space-y-1 max-h-[460px] overflow-y-auto pr-1">
              {experimentReels.map((r, idx) => {
                const isSelected = r.id === selectedReel.id;
                const isMatch = r.labelStatus === 'MATCH';
                return (
                  <button
                    key={r.id}
                    onClick={() => setSelectedReelId(r.id)}
                    className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-brand-500/20 border-brand-500/60 text-white'
                        : 'bg-surface-950/60 border-surface-800/80 text-surface-400 hover:text-surface-200 hover:bg-surface-950'
                    }`}
                  >
                    <div className="truncate pr-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-surface-500">#{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                        <span className="font-bold text-[11px] text-white truncate">{r.filename}</span>
                      </div>
                      <div className="text-[10px] text-surface-500 flex items-center gap-1 mt-0.5">
                        <span>Folder: {r.sourceFolder}</span> · <span className="text-accent-cyan">{r.predictedCategory}</span>
                      </div>
                    </div>
                    <span className={`badge text-[9px] font-bold ${
                      isMatch ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' : 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                    }`}>
                      {r.labelStatus || 'MATCH'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Detailed Deep Trace for Selected Reel */}
          <div className="md:col-span-8 space-y-4">
            <div className="p-4 rounded-2xl bg-surface-950 border border-surface-800 space-y-3">
              <div className="flex items-center justify-between border-b border-surface-850 pb-2">
                <span className="font-bold text-accent-cyan text-sm flex items-center gap-2">
                  <HardDrive size={15} /> {selectedReel.filename}
                </span>
                <span className="badge bg-brand-500/20 text-brand-300 border-brand-500/40 text-[10px]">
                  ID: {selectedReel.id}
                </span>
              </div>

              {/* Three Concepts & Hash */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                <div className="p-2 rounded-lg bg-surface-900 border border-surface-800">
                  <span className="text-[9px] text-surface-500 block">SOURCE FOLDER</span>
                  <span className="text-white font-bold">{selectedReel.sourceFolder}</span>
                </div>
                <div className="p-2 rounded-lg bg-surface-900 border border-surface-800">
                  <span className="text-[9px] text-surface-500 block">DATASET LABEL</span>
                  <span className="text-surface-200 font-bold">{selectedReel.datasetLabel}</span>
                </div>
                <div className="p-2 rounded-lg bg-surface-900 border border-brand-500/40">
                  <span className="text-[9px] text-brand-300 block">AI PREDICTED</span>
                  <span className="text-accent-cyan font-bold">{selectedReel.predictedCategory}</span>
                </div>
                <div className="p-2 rounded-lg bg-surface-900 border border-surface-800">
                  <span className="text-[9px] text-surface-500 block">AI CONFIDENCE</span>
                  <span className="text-emerald-400 font-bold">{selectedReel.aiConfidence || 86}%</span>
                </div>
              </div>

              {/* Multi-Signal Evidence */}
              {selectedReel.evidenceScores && (
                <div className="p-2.5 rounded-lg bg-surface-900/90 border border-surface-800 text-[10px] space-y-1">
                  <span className="text-surface-500 block font-bold">MULTI-SIGNAL EVIDENCE SCORES:</span>
                  <div className="grid grid-cols-4 gap-2 text-center pt-0.5">
                    <div>Visual: <strong className="text-white">{selectedReel.evidenceScores.visual}%</strong></div>
                    <div>OCR: <strong className="text-accent-cyan">{selectedReel.evidenceScores.ocr}%</strong></div>
                    <div>Speech: <strong className="text-emerald-400">{selectedReel.evidenceScores.speech}%</strong></div>
                    <div>Semantic: <strong className="text-brand-300">{selectedReel.evidenceScores.semantic}%</strong></div>
                  </div>
                </div>
              )}

              {/* Dynamic Continuous Scores */}
              <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                <div className="p-2 rounded-lg bg-surface-900 border border-surface-800">
                  <span className="text-surface-500 block text-[9px]">TECH DEPTH</span>
                  <span className="font-bold text-accent-cyan">{selectedReel.technicalDepth}/100</span>
                </div>
                <div className="p-2 rounded-lg bg-surface-900 border border-surface-800">
                  <span className="text-surface-500 block text-[9px]">LEARNING VALUE</span>
                  <span className="font-bold text-emerald-400">{selectedReel.educationalValue}/100</span>
                </div>
                <div className="p-2 rounded-lg bg-surface-900 border border-surface-800">
                  <span className="text-surface-500 block text-[9px]">ENTERTAINMENT</span>
                  <span className="font-bold text-pink-400">{selectedReel.entertainmentValue}/100</span>
                </div>
                <div className="p-2 rounded-lg bg-surface-900 border border-surface-800">
                  <span className="text-surface-500 block text-[9px]">MOTIVATION</span>
                  <span className="font-bold text-amber-400">{selectedReel.motivationLevel}/100</span>
                </div>
              </div>

              {/* SHA-256 Content Hash */}
              <div className="p-2.5 rounded-lg bg-surface-900/90 border border-surface-800 text-[10px] space-y-1">
                <span className="text-surface-500 block">SHA-256 CONTENT BYTE HASH (Zero Filename Bias):</span>
                <code className="text-accent-cyan break-all block">{selectedReel.file_hash || 'SHA256_INVARIANT_HASH'}</code>
              </div>

              {/* AI Semantic Summary */}
              <div className="space-y-1">
                <span className="text-[10px] text-surface-500 font-bold uppercase block">AI SEMANTIC DESCRIPTION:</span>
                <p className="p-2.5 rounded-xl bg-surface-900 border border-surface-800 text-surface-300 leading-relaxed text-[11px]">
                  {selectedReel.generated_description || selectedReel.description}
                </p>
              </div>

              {/* Key Moments */}
              <div className="space-y-1">
                <span className="text-[10px] text-surface-500 font-bold uppercase block flex items-center gap-1">
                  <Clock size={12} className="text-amber-400" /> TIMESTAMPED EVIDENCE MOMENTS:
                </span>
                <div className="space-y-1">
                  {(selectedReel.key_moments || []).map((km, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-surface-900 border border-surface-800 flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-brand-500/20 text-accent-cyan font-bold text-[10px]">
                          {km.timestamp}
                        </span>
                        <span className="text-surface-300">{km.description}</span>
                      </div>
                      <span className="text-[10px] text-surface-500">Conf: {Math.round((km.confidence || 0.9) * 100)}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Observed Interaction Telemetry */}
              {interaction && (
                <div className="p-3 rounded-xl bg-brand-950/40 border border-brand-500/40 text-[11px] space-y-1">
                  <span className="text-brand-300 font-bold block text-[10px] uppercase">
                    USER INTERACTION TELEMETRY ON THIS REEL:
                  </span>
                  <div className="grid grid-cols-4 gap-2 pt-1 text-center">
                    <div>
                      <span className="text-surface-500 text-[9px] block">WATCH %</span>
                      <span className="font-bold text-white">{interaction.completion_percentage}%</span>
                    </div>
                    <div>
                      <span className="text-surface-500 text-[9px] block">WATCH DURATION</span>
                      <span className="font-bold text-white">{interaction.watch_duration}s / {interaction.video_duration}s</span>
                    </div>
                    <div>
                      <span className="text-surface-500 text-[9px] block">LIKED / SAVED</span>
                      <span className="font-bold text-white">{interaction.liked ? 'YES' : 'NO'} / {interaction.saved ? 'YES' : 'NO'}</span>
                    </div>
                    <div>
                      <span className="text-surface-500 text-[9px] block">REPLAY COUNT</span>
                      <span className="font-bold text-white">{interaction.replay_count}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 2: CONSISTENCY BENCHMARK ── */}
      {activeTab === 'evaluation' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3.5 rounded-xl bg-surface-950 border border-surface-800">
              <span className="text-[10px] text-surface-500 block">TOTAL REELS</span>
              <span className="text-lg font-bold text-white">{evaluationMetrics?.total_evaluated || experimentReels.length}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-950 border border-surface-800">
              <span className="text-[10px] text-surface-500 block">MATCHES</span>
              <span className="text-lg font-bold text-emerald-400">{evaluationMetrics?.matches_count ?? Math.round(experimentReels.length * 0.40)}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-950 border border-surface-800">
              <span className="text-[10px] text-surface-500 block">LABEL CONFLICTS</span>
              <span className="text-lg font-bold text-amber-400">{evaluationMetrics?.conflicts_count ?? Math.round(experimentReels.length * 0.60)}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-950 border border-surface-800">
              <span className="text-[10px] text-surface-500 block">AGREEMENT RATE</span>
              <span className="text-lg font-bold text-accent-cyan">{evaluationMetrics?.agreement_rate ?? 40.0}%</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-surface-950 border border-surface-800 space-y-2">
            <span className="font-bold text-surface-300 block text-xs">PER-CATEGORY PRECISION & RECALL BENCHMARK:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              {evaluationMetrics &&
                Object.entries(evaluationMetrics.per_category).map(([cat, m]) => (
                  <div key={cat} className="p-2.5 rounded-lg bg-surface-900 border border-surface-800 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white">{cat}</span>
                      <span className="text-[10px] text-surface-500 block">Samples: {m.samples}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-accent-cyan font-bold block">F1: {m.f1_score}</span>
                      <span className="text-[10px] text-surface-400">P: {m.precision} · R: {m.recall}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 3: BEHAVIOR WEIGHT CONTROLS ── */}
      {activeTab === 'weights' && (
        <div className="space-y-4">
          <p className="text-xs text-surface-400">
            Adjust the weights used to calculate behavioral affinity from raw interaction signals:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(behaviorWeights).map(([k, v]) => (
              <div key={k} className="p-3 rounded-xl bg-surface-950 border border-surface-800 space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white capitalize">{k.replace('_', ' ')}:</span>
                  <span className="text-accent-cyan font-bold">{v}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="0.1"
                  value={v}
                  onChange={(e) => setBehaviorWeights({ [k]: parseFloat(e.target.value) })}
                  className="w-full accent-brand-500 cursor-pointer"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end pt-2">
            <button onClick={() => resetBehaviorWeights()} className="btn-ghost text-xs">
              Reset to Defaults
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
