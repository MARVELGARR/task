'use client'
import { useIsMenuOpenStore } from "@/hooks/zustan/menu";
import { navBarProps } from "@/lib/interface";
import { cn } from "@/lib/utils";
import { LayoutDashboard, ListTodo, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = ({className}: {className?: string}) => {
    const navBar: navBarProps[] = [
        {id: 1, name: 'dashboard', icon: <LayoutDashboard className='hover:fill-orange-600 hover:stroke-orange-600 stroke-orange-600' />, link:'/'},
        {id: 2, name: 'task', icon: <ListTodo className='hover:fill-orange-600 hover:stroke-orange-600 stroke-orange-600' />, link: "/task"}
    ]
    const { isOpen, change } = useIsMenuOpenStore()
    const url = usePathname()
    return (
        <div className={cn('md:hidden', className)}>
            <div className=""></div>
            <div className="gap-[5rem] h-full">
                <div onClick={change} className="w-full flex justify-end pr-[5rem]">
                    { !isOpen && (<X />)}
                </div>
                {
                  navBar.map((item)=>{
                    return(
                        <div className="flex flex-col gap- w-full justify-center items-center">
                            <Link href={item.link} className={cn( "text-xl hover:text-orange-300", url == item.link ? "  text-orange-600": "")}>{item.name}</Link>
                        </div>
                    )
                  })  
                }
            </div>
        </div>
    );
}
 
export default MobileNav;