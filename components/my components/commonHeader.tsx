'use client'
import { Bell, Menu, Plus, X } from "lucide-react";
import { Button } from "../ui/button";
import SearchBar from "./searchBar";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useIsMenuOpenStore } from "@/hooks/zustan/menu";
import MobileNav from "./mobileNav";



const CommonHeader = ({className}:{className?: string}) => {

    const { isOpen, change } = useIsMenuOpenStore();

    return (
        <div className={cn(' justify-between gap-[2rem]',className)}>
            <Button className="hidden bg-orange-600 md:flex items-center hover:bg-orange-200/70 hover:text-orange-600  gap-2 rounded-xl border-0"><Plus className="stroke-white"/> Add Task</Button>

            <SearchBar className={''}/>

            <div className=" items-center gap-[1rem] hidden sm:flex">
                <Bell className='hover:fill-orange-300'/>
                <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <Button onClick={change} className='sm:hidden'>
                { isOpen ? (<Menu />) :
                (<X />)}
            </Button>
            { !isOpen && (<MobileNav
                className='absolute w-[80%] h-full bg-white z-50 right-0 top-5 bottom-0 '
            />)}
        </div>
    );
}
 
export default CommonHeader;

