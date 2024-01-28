'use client'
import { CardTitle, CardContent, Card } from "@/components/ui/card"
import { Task, useAddTask } from "@/hooks/zustan/task"
import { cn } from "@/lib/utils"
import { JSX, SVGProps, useEffect, useState } from "react"




export default function DashBoardCards({className}: {className?: string}) {

    const [completedTask, setCompletedTask] = useState<Task[]>([])
    const [pendingTask, setpendingTask] = useState<Task[]>([])

    const {tasks} = useAddTask()

    useEffect(()=>{

        setCompletedTask( tasks.filter((task)=>task.status === "completed"))
        setpendingTask( tasks.filter((task)=>task.status === "pending"))
    },[tasks])



  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      <Card className="w-full p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-bold">Total Tasks</CardTitle>
          <ActivityIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
        </div>
        <CardContent className="text-2xl font-bold mt-2">{tasks.length}</CardContent>
      </Card>
      <Card className="w-full p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-bold">Completed Tasks</CardTitle>
          <CheckIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
        </div>
        <CardContent className="text-2xl font-bold mt-2">{completedTask.length}</CardContent>
      </Card>
      <Card className="w-full p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-bold">Pending Tasks</CardTitle>
          <PauseIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
        </div>
        <CardContent className="text-2xl font-bold mt-2">{pendingTask.length}</CardContent>
      </Card>
    </div>
  )
}

function ActivityIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}


function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function PauseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="4" height="16" x="6" y="4" />
      <rect width="4" height="16" x="14" y="4" />
    </svg>
  )
}