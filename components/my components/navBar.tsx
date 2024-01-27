'use client'
import { cn } from '@/lib/utils';
import NavItems from './navItems';

import { LayoutDashboard, LayoutDashboardIcon, List, ListTodo, ThermometerSnowflake } from "lucide-react";
import { navBarProps } from '@/lib/interface';
import { usePathname } from 'next/navigation';

const NavBar = ({className}: {className?: string}) => {


    const navBar: navBarProps[] = [
        {id: 1, name: 'dashboard', icon: <LayoutDashboard className='hover:fill-orange-600 hover:stroke-orange-600 stroke-orange-600' />, link:'/'},
        {id: 2, name: 'task List', icon: <ListTodo className='hover:fill-orange-600 hover:stroke-orange-600 stroke-orange-600' />, link: "/taskList"},
        {id: 2, name: 'task', icon: <List className='hover:fill-orange-600 hover:stroke-orange-600 stroke-orange-600' />, link: "/task"}
    ]
    const url = usePathname()

    return (
        <ul className={cn('', className)}>
            {
                navBar.map((item)=>{
                    return (
                        <NavItems
                            id={item.id}
                            key={item.id}
                            name={item.name}
                            icon={item.icon}
                            link={item.link} 
                            className={cn('flex w-full rounded-xl border-2 justify-between p-2  hover:rounded-md hover:shadow-md', url == item.link? " bg-orange-500/70": "")}                        
                        />
                    )
                })
            }
        </ul>
    );
}
 
export default NavBar;