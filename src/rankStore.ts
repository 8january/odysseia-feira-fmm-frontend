import {create} from 'zustand';

type UserT = {
    name: string
    correct: number
    time: number
    minutes: number
    seconds: number
    position: number
    _id: any;
  }

interface RankStore {
  rankedUsers: UserT[];
  setRankedUsers: (rankedUsers: any[]) => void;
}

export const useRankStore = create<RankStore>((set) => ({
  rankedUsers: [],
  setRankedUsers: (rankedUsers) => set({ rankedUsers }),
}));
