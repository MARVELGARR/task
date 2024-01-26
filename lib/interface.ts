

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