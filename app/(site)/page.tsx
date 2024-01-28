import CommonHeader from "@/components/my components/commonHeader";
import DashBoardCards from "@/components/my components/dashBoardCards/cards";


export default function Home() {
  return (
    <main className="h-full flex w-full">
      
      <CommonHeader className="flex w-full pt-2 h-[5rem] items-center  px-[3rem]"/>
      <div className="">
        <div className="">
          <DashBoardCards className='/>
        </div>
        <div className="">
          
        </div>
      </div>
    </main>
  );
}
