'use client'
import { navItemsProps } from "@/lib/interface";
import { cn } from "@/lib/utils";
import Link from "next/link";



const NavItems = ({id, name, icon, link, className
}: navItemsProps) => {
    return (
        <Link key={id} href={link} className={cn('', className)}>
            {icon}
            <div className="hover:text-orange-600 hidden md:block">{name}</div>
        </Link>
    );
}
 
export default NavItems;