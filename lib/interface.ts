

export interface navBarProps{
    id: number,
    name: string,
    icon:  React.ReactNode,
    link: string
}

export interface navItemsProps{
    id: number,
    name: string,
    icon: any,
    className?: string
    link: string   
}

export type taskProps = {
    id: string
    task: string,
    description: string,
    date_Created: Date
    due_Date: Date,
    status: "pending" | "completed" 
}
