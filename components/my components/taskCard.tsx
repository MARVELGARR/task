'use client'
import { CardTitle, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { JSX, SVGProps } from "react"
import { taskProps } from '../../lib/interface';

export default function TaskCard({id, task, description, due_Date, date_Created, status}: taskProps) {
  return (
    <Card className="w-full max-w-md p-4">
      <div className="flex justify-between items-start">
        <CardTitle className="text-lg font-bold">{task}</CardTitle>
        <Badge className={`${ status === 'completed' ? "bg-green-500" : 'bg-gray-200'} text-white text-xs py-1 px-2 rounded-full`}>{status}</Badge>
      </div>
      <CardContent className="text-sm mt-2">{description}</CardContent>
      <div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
        <CalendarIcon className="w-5 h-5 mr-2" />
        <div className=""></div>
        Due: {JSON.stringify(due_Date)}
      </div>
    </Card>
  )
}

function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}
