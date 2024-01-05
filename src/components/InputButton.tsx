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

  async function handleAddApp(e) {
    e.preventDefault();
    setIsDialogOpen(false);
    const applicationsCopy = [...applications];
    applicationsCopy.unshift({ companyName, jobTitle, notes });
    setApplications(applicationsCopy);
  }
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className={"my-10"} variant="outline">
          Add Application
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleAddApp}>
          <DialogHeader>
            <DialogTitle>Add Application</DialogTitle>
            <DialogDescription>
              Input you application data here, and click save
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="company-name" className="text-right">
                Company Name
              </label>
              <input
                onChange={(e) => setCompanyName(e.target.value)}
                value={companyName}
                id="company-name"
                required={true}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="job-title" className="text-right">
                Job Title
              </label>
              <input
                onChange={(e) => setJobTitle(e.target.value)}
                value={jobTitle}
                id="job-title"
                required={true}
                className="col-span-3"
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
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
