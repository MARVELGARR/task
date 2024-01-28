'use client'
import CommonHeader from "@/components/my components/commonHeader";
import TaskCard from "@/components/my components/taskCard";
import { useAddTask } from "@/hooks/zustan/task";



const Task = () => {
    const {tasks} = useAddTask()
    return (
        <div className="w-full h-full flex flex-col">
            <CommonHeader className="flex w-full pt-2 h-[5rem] items-center px-[3rem]" />
            <div className="w-full h-full card-container p-[2rem]">
                {tasks.map((items)=>{
                    return (
                        <TaskCard
                            id={items.id}
                            task={items.task}
                            description={items.description}
                            status={items.status}
                            due_Date={items.due_Date}
                            date_Created={items.date_Created}
                        />
                    )
                }
                )}
            </div>
        </div>
    );
}
 
export default Task;