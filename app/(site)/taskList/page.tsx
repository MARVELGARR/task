'use client'


import { columns } from "@/components/my components/My Table/tasks/columns";
import { DataTable } from "@/components/my components/My Table/tasks/data-table";
import CommonHeader from "@/components/my components/commonHeader";
import { taskProps } from '../../../lib/interface';
import { useAddTask } from "@/hooks/zustan/task";


const TaskList = () => {
    const {tasks} = useAddTask()
    
    return (
        <div className="h-full w-full flex flex-col items-center">
            <CommonHeader className="flex w-full pt-2 h-[5rem] items-center px-[3rem]" />
            <div className="mt-4 w-full">
                <DataTable  columns={columns} data={tasks} />
            </div>
        </div>
    );
}

export default TaskList;
