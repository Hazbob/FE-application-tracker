import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {StatusDropdown} from "@/components/StatusDropdown.tsx";
import {useState} from "react";
import {statusColourSetter} from "@/utils/statusColourSetter.ts";

const applications = [
    {
        jobTitle: "Junior software developer",
        companyName: "Mcdonalds",
        notes: null,
        status: "APPLIED",
        createdAt: "20/20/20",
        appliedDate: null,

    },
    {
        jobTitle: "Junior software developer",
        companyName: "Mcdonalds",
        notes: null,
        status: "APPLIED",
        appliedDate: null,

    },
    {
        jobTitle: "Junior software developer",
        companyName: "Mcdonalds",
        notes: "ahdoiawhodiahiodhawoihdaohdowiahdowiah lorem",
        status: "APPLIED",
        createdAt: "20/20/20",
        appliedDate: '20/20/20',

    },
]

type CardProps = React.ComponentProps<typeof Card>

export function ApplicationCard({ className, ...props }: CardProps) {
    return (
        <ul className={"flex flex-col gap-2"}>
            {applications.map((app, index) => {
                const [status, setStatus] = useState(app.status)
                return <li key={index}><Card className={cn("w-[380px]", className)} {...props}>
                    <CardHeader>
                        <div className={"flex justify-between gap-2"}>
                            <span className={"flex-grow"}><StatusDropdown status={status} setStatus={setStatus} currentStatus={app.status}/></span>
                            <div id={"dot"} className={`w-10 h-10 rounded-3xl ${statusColourSetter(status)} ml-1`}></div>
                        </div>
                        <CardTitle>{app.companyName}</CardTitle>
                        <h2>{app.jobTitle}</h2>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className=" flex items-center space-x-4 rounded-md border p-4">
                            <CardDescription>{app.notes ? app.notes : "No Notes..."}</CardDescription>
                        </div>
                    </CardContent>
                    <CardFooter>
                        Applied: {app.appliedDate}
                    </CardFooter>
                </Card></li>})
            }
        </ul>


    )
}