'use client'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { v4 as uuidv4 } from 'uuid';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";

import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { X } from "lucide-react";
import { useToggleTaskForm } from "@/hooks/zustan/toggleTaskForm";
import { useAddTask } from "@/hooks/zustan/task";
 
const formSchema = z.object({
    id: z.string(),
  task: z.string(),
  description: z.string(),
  status: z.enum([ "pending", "completed" ]),
  date_Created: z.date(),
  due_Date: z.date()
})

const AddTaskForm = ({className}:{className?: string}) => {

    const { addTask, tasks } = useAddTask()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          id: "",
          task: '',
          description: '',
          status: "pending",
          date_Created: new Date(),
          due_Date: new Date(),
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {

        addTask(values)
        console.log(values)
    }

    const { changeTask } = useToggleTaskForm()

    return (
        <div className={cn('',className)}>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={cn('space-y-2 py-4 w-[28rem]  relative')}>
                    <FormField
                    control={form.control}
                    name="task"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input className='w-[25rem] rounded-xl h-[2.3rem]' placeholder="Add..." {...field} />
                                </FormControl>
                            <FormMessage className='text-red-600' />
                        </FormItem>
                        

                    )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                    placeholder="Tell us a little bit about your task"
                                    className="resize-none w-[25rem] rounded-xl h-[2.3rem]"
                                    {...field}
                                    />
                                </FormControl>
                                <FormMessage className='text-red-600' />
                            </FormItem>
                        )}
                        />
                        <FormField
                            control={form.control}
                            name="status"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                <FormLabel>Are you?..</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                            <RadioGroupItem value="pending" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Pending
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                            <RadioGroupItem value="completed" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Completed
                                            </FormLabel>
                                        </FormItem>
                                    
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage className='text-red-600' />
                                </FormItem>
                            )}
                            />
                            <FormField
                                control={form.control}
                                name="due_Date"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                    <FormLabel>End date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[25rem] rounded-xl h-[2.3rem] pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                            >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date: Date) =>
                                            date > new Date() || date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                        </PopoverContent>
                                    </Popover>

                                    <FormMessage className='text-red-600' />
                                    </FormItem>
                                )}
                                />
                    <Button className='border-2 hover:bg-back bg-orange-600 text-white' type="submit">Submit</Button>
                    <div onClick={changeTask} className="absolute cursor-pointer top-3 right-4"><X/></div>
                </form>
                </Form>
        </div>

    );
}
 
export default AddTaskForm;