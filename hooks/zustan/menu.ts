import { create } from 'zustand'

interface isOpen{
    isOpen: boolean;
    change: ()=>void;
}
export const useIsMenuOpenStore = create<isOpen>((set) => ({
  isOpen: true,
  change: () => set((state: isOpen) => ({ isOpen: !state.isOpen  })),
}))