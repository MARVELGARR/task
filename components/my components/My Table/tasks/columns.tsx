"use client"

import { taskProps } from "@/lib/interface"
import { ColumnDef } from "@tanstack/react-table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
export const columns: ColumnDef<taskProps>[] = [
    {
      accessorKey: "task",
      header: "Tasks",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "date_Created",
      header: "Date Created",
    },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "due_Date",
    header: "Due Date",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const tasks = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(tasks.id)}
            >
              Copy task ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View task</DropdownMenuItem>
            <DropdownMenuItem>View task details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
