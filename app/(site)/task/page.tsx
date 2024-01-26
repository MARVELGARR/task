'use client'


import { columns } from "@/components/my components/My Table/tasks/columns";
import { DataTable } from "@/components/my components/My Table/tasks/data-table";
import CommonHeader from "@/components/my components/commonHeader";
import { taskProps } from '../../../lib/interface';

const Task = () => {
    const data: taskProps[] = [{
        id: "728ed52f",
        status: "pending",
        task: "sign the deal",
        description: "a task to sign the deal",
        date_Created: new Date().toLocaleDateString('en-GB'),
        due_Date: new Date().toLocaleDateString('en-GB'),
    }];

    return (
        <div className="h-full w-full flex flex-col items-center">
            <CommonHeader className="flex w-full pt-2 h-[5rem] items-center px-[3rem]" />
            <div className="mt-4 w-full">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    );
}

export default Task;
