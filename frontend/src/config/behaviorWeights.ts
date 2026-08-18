export interface BehaviorWeights {
  completion: number; // 0.25
  replay: number; // 0.20
  save: number; // 0.20
  like: number; // 0.10
  share: number; // 0.15
  earlySkipPenalty: number; // 0.10
}

export const DEFAULT_BEHAVIOR_WEIGHTS: BehaviorWeights = {
  completion: 0.25,
  replay: 0.20,
  save: 0.20,
  like: 0.10,
  share: 0.15,
  earlySkipPenalty: 0.10,
};
