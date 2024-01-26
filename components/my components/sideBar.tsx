import Image from "next/image";
import NavBar from "./navBar";
import { cn } from "@/lib/utils";


const SideBar = ({className}:{className?: String}) => {
    return (
        <div className={cn('h-full flex flex-col gap-[3rem]', className)}>
            <Image 
                src={"/images/teach.png"} 
                alt={"Logo"}           
                width={240} 
                height={220}
                className="hidden md:block"
            />
            <NavBar
               className={'w-full flex flex-col gap-2 h-full pt-[2rem] md:pt-[0.5rem]'}
            />
        </div>
    );
}
 
export default SideBar;