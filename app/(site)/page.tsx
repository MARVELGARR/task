'use client'
import CommonHeader from "@/components/my components/commonHeader";
import DashBoardCards from "@/components/my components/dashBoardCards/cards";
import { useAddTask } from "@/hooks/zustan/task";
import { Chart } from "react-google-charts";


export default function Home() {

  const { tasks } = useAddTask()

  
  const completedTasksCount = tasks.filter((item) => item.status === 'completed').length;
  const pendingTasksCount = tasks.filter((item) => item.status === 'pending').length;
  const chartData = [
    ['Status', 'Count'],
    ['Completed', completedTasksCount],
    ['Pending', pendingTasksCount],
  ];

  

  return (
    <main className="h-full flex flex-col w-full">
      
      <CommonHeader className="flex w-full pt-2 h-[5rem] items-center  px-[3rem]"/>
      <div className="">
        <div className="">
          <DashBoardCards className=''/>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3rem] mt-4">
          <div className=" w-fit border-4 border-double border-gray-300">

            <Chart
              chartType="PieChart"
              data={chartData}
              width="300px"
              height="300px"
              options={{
                title: 'Task Status',
                pieSliceText: 'value',
                slices: {
                  0: { color: 'green' },
                  1: { color: 'orange' },
                },
                pieHole: 0.4,
                pieStartAngle: 180,
                tooltip: {
                  trigger: 'selection', // Show tooltip on selection
                },
                animation: {
                  duration: 1000, // Animation duration in milliseconds
                  easing: 'out', // Animation easing function
                },
                pieSliceTextStyle: {
                  fontSize: 14, // Font size of the pie slice text
                },
                enableInteractivity: true, // Enable interactivity
                sliceVisibilityThreshold: 0.02, // Show slices with a minimum value of 2%

              }}
              legendToggle
            />
          </div>
          <div className=" w-fit border-4 border-double border-gray-300">

            <Chart
              chartType="BarChart"
              data={chartData}
              width="300px"
              height="300px"
              options={{
                title: 'Task Status',

              }}
              legendToggle
            />
          </div>
          
        </div>
      </div>
    </main>
  );
}
