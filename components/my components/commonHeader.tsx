import { Bell, Menu, Plus, X } from "lucide-react";
import { Button } from "../ui/button";
import SearchBar from "./searchBar";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const CommonHeader = ({className}:{className?: string}) => {
    return (
        <div className={cn(' justify-between gap-[2rem]',className)}>
            <Button className="hidden bg-orange-600 md:flex items-center hover:bg-orange-200/70 hover:text-orange-600  gap-2 rounded-xl border-0"><Plus className="stroke-white"/> Add Task</Button>

            <SearchBar className={''}/>

            <div className=" items-center gap-[1rem] hidden md:flex">
                <Bell className='hover:fill-orange-300'/>
                <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <Button className='md:hidden'>
                <Menu />
                <X />
            </Button>
        </div>
    );
}
 
export default CommonHeader;