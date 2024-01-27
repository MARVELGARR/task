import { create } from 'zustand'

interface isOpenTaskForm{
  isOpenTask: boolean;
  changeTask: ()=>void;
}
export const useToggleTaskForm = create<isOpenTaskForm>((set) => ({
  isOpenTask: true,
  changeTask: () => set((state: isOpenTaskForm) => ({ isOpenTask: !state.isOpenTask  })),
}))

