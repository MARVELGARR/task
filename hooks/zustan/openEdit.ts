import { create } from 'zustand'

interface isOpenTaskForm{
  isOpenEditTask: boolean;
  changeEdit: (id?: string)=>void;
  editId: string
}
export const useToggleEditTaskForm = create<isOpenTaskForm>((set) => ({
    isOpenEditTask: false,
    editId: '',
  changeEdit: (id) => set((state: isOpenTaskForm) => ({ isOpenEditTask: !state.isOpenEditTask, editId: id  })),
}))

