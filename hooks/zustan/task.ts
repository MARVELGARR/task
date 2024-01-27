import { create } from 'zustand'

interface Task{
    id: string;
    task: string;
    description: string;
    due_Date: Date;
    date_Created: Date;
    status: "pending" | "completed"
}
interface taskProps{
    tasks: Task[]
    addTask: (newTask: Task)=>void;
}
export const useAddTask = create<taskProps>((set) => ({
    tasks: [],
  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask]  })),
}))