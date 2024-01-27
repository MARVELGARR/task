'use client'
import AddTaskForm from "@/components/my components/My Forms/addTaskForm";
import { useToggleTaskForm } from "@/hooks/zustan/toggleTaskForm";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";


const SiteLayout = ({children}: {children: ReactNode}) => {

    const { isOpenTask } = useToggleTaskForm()

    return (
        <div className="w-full h-full relative">
            { isOpenTask && (<div className={cn('absolute flex left-0 right-0 top-0 pt- bottom-0 justify-center  z-50', isOpenTask ? "backdrop-blur-md filter" : '')}>

                <AddTaskForm className="pt-[10rem]"/>
            </div>)}
            {children}
        </div>
    );
}
 
export default SiteLayout;