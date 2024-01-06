import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StatusDropdown } from "@/components/StatusDropdown.tsx";
import { useState } from "react";
import { statusColourSetter } from "@/utils/statusColourSetter.ts";
import { IoTrashBinSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button.tsx";
import { formatDate } from "@/utils/formatDate.ts";
type CardProps = React.ComponentProps<typeof Card>;

export function ApplicationCard({
  applications,
  setApplications,
  newApp,
  className,
  ...props
}) {
  /*
    STATES
     */
  const [statuses, setStatuses] = useState(() =>
    applications.reduce((acc, app) => {
      acc[app.id] = app.status;
      return acc;
    }, {}),
  );

  /*
    HANDLERS
     */
  async function handleDeleteApplication(id: string) {
    try {
      const updatedArray = applications.filter((el) => el.id !== id);
      return setApplications(updatedArray);
    } catch (err) {
      return <h1>{err}</h1>;
    }
  }

  function handleStatusChange(appId, newStatus) {
    setStatuses((prevStatuses) => ({ ...prevStatuses, [appId]: newStatus }));
  }
  /*
  TSX
   */
  return (
    <ul className={"flex flex-col gap-2 lg:grid lg:grid-cols-3"}>
      {applications.map((app, index) => {
        return (
          <li className={"md:w-1/3"} key={app.id}>
            <Card className={cn("w-[380px]", className)} {...props}>
              <CardHeader>
                <div className={"flex justify-between gap-2"}>
                  <span className={"flex-grow"}>
                    <StatusDropdown
                      status={app.status}
                      setStatus={(newStatus) =>
                        handleStatusChange(app.id, newStatus)
                      }
                      currentStatus={app.status}
                    />
                  </span>
                  <div
                    id={"dot"}
                    className={`w-10 h-10 rounded-3xl ${statusColourSetter(
                      statuses[app.id],
                    )} ml-1`}
                  ></div>
                </div>
                <CardTitle>{app.companyName}</CardTitle>
                <h2>{app.jobTitle}</h2>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                  <CardDescription>
                    {app.notes ? app.notes : "No Notes..."}
                  </CardDescription>
                </div>
              </CardContent>
              <CardFooter>
                <div className={"flex w-full justify-between"}>
                  <p>Applied: {formatDate(app.appliedDate)}</p>
                  <Button
                    aria-label={"delete button"}
                    onClick={() => handleDeleteApplication(app.id)}
                  >
                    <IoTrashBinSharp />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
