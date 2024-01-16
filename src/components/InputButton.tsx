import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { handleAddApp } from "@/services/postApplication.ts";
import Loader from "@/components/Loader.tsx";
import RetryButton from "@/components/RetryButton.tsx";

export function InputButton({
  jobTitle,
  setJobTitle,
  companyName,
  setCompanyName,
  notes,
  setNotes,
  setApplications,
  applications,
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [needRetry, setNeedRetry] = useState(false);
  const setters: any = {
    setErrorMessage,
    setLoading,
    setIsDialogOpen,
    setNeedRetry,
    setError,
    setApplications,
    setJobTitle,
    setNotes,
    setCompanyName,
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className={"my-10"} variant="outline">
          Add Application
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {!isLoading ? (
          <form
            onSubmit={(e) =>
              handleAddApp(
                e,
                setters,
                companyName,
                jobTitle,
                notes,
                applications,
              )
            }
          >
            <DialogHeader>
              <DialogTitle>Add Application</DialogTitle>
              <DialogDescription>
                Input you application data here, and click save
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                {error && <p>{errorMessage}</p>}
                <label htmlFor="company-name" className="text-right">
                  Company
                </label>
                <input
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={companyName}
                  id="company-name"
                  required={true}
                  className="col-span-3 border-black border-2 rounded-l"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4 ">
                <label htmlFor="job-title" className="text-right">
                  Job Title
                </label>
                <input
                  onChange={(e) => setJobTitle(e.target.value)}
                  value={jobTitle}
                  id="job-title"
                  required={true}
                  className="col-span-3 border-black border-2 rounded-l"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="notes" className="text-right">
                  Notes
                </label>
                <input
                  onChange={(e) => setNotes(e.target.value)}
                  value={notes}
                  id="notes"
                  className="col-span-3 border-black border-2 rounded-l"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        ) : needRetry ? (
          <RetryButton
            funcToRetry={handleAddApp}
            companyName={companyName}
            jobTitle={jobTitle}
            notes={notes}
            setters={setters}
            applications={applications}
          />
        ) : (
          <Loader color={"border-blue-950"} />
        )}
      </DialogContent>
    </Dialog>
  );
}
