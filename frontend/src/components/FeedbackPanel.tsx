import { useState } from 'react';
import { ThumbsUp, ThumbsDown, Check, CheckCircle2, RotateCw } from 'lucide-react';
import { useStore } from '../store/useStore';
import type { UserFeedback } from '../types';

interface Props {
  recommendationId: string;
}

export default function FeedbackPanel({ recommendationId }: Props) {
  const { userFeedbacks, addFeedback } = useStore();
  const [justSubmitted, setJustSubmitted] = useState(false);

  const existing = userFeedbacks.find((f) => f.recommendationId === recommendationId);

  const handleSelect = (feedbackType: UserFeedback['feedbackType']) => {
    addFeedback({
      recommendationId,
      feedbackType,
      timestamp: Date.now(),
    });
    setJustSubmitted(true);
    setTimeout(() => setJustSubmitted(false), 3000);
  };

  const options: Array<{ type: UserFeedback['feedbackType']; label: string; icon?: React.ReactNode }> = [
    { type: 'helpful', label: 'Helpful', icon: <ThumbsUp size={13} /> },
    { type: 'not_relevant', label: 'Not Relevant', icon: <ThumbsDown size={13} /> },
    { type: 'already_know', label: 'Already Know This' },
    { type: 'too_advanced', label: 'Too Advanced' },
    { type: 'want_beginner', label: 'Want Beginner Version' },
  ];

  return (
    <div className="p-4 rounded-2xl bg-surface-900/60 border border-surface-800/80 mt-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <span className="text-xs font-semibold text-surface-300 uppercase tracking-wider">
          Adaptive Feedback Loop
        </span>
        {existing && (
          <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
            <CheckCircle2 size={12} /> Model calibrated with your preference
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {options.map((opt) => {
          const isSelected = existing?.feedbackType === opt.type;
          return (
            <button
              key={opt.type}
              onClick={() => handleSelect(opt.type)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-brand-500 text-white border-brand-400 shadow-sm'
                  : 'bg-surface-800/60 hover:bg-surface-700 text-surface-300 border-surface-700/60'
              }`}
            >
              {opt.icon}
              <span>{opt.label}</span>
              {isSelected && <Check size={12} className="ml-0.5" />}
            </button>
          );
        })}
      </div>

      <p className="text-[11px] text-surface-500 mt-2.5">
        Feedback refines latent cluster weightings for future sessions without storing personal identity data.
      </p>
    </div>
  );
}
