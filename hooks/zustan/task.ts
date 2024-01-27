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
    removeTask: (id: string)=>void;
    editTask:(id: string, updatedTask: Task)=>void;
}
export const useAddTask = create<taskProps>((set) => ({
    tasks: [],
    addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask]  })),
    removeTask: (id) => set((state) => ({
        tasks: state.tasks.filter(task => task.id !== id)
    })),
    editTask: (id, updatedTask) => set((state) => ({
        tasks: state.tasks.map(task => {
            if (task.id === id) {
                return { ...task, ...updatedTask };
            }
            return task;
        })
    }))
}))