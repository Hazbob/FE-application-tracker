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
import Loader from "@/components/Loader.tsx";
import { MdEdit } from "react-icons/md";
import updateApplication from "@/services/updateApplication.ts";

export function EditButton({ applicationId, setApplications, applications }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [error] = useState(false);
  const [errorMessage] = useState("");
  const [isLoading] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [notes, setNotes] = useState("");
  const [appliedDate, setAppliedDate] = useState("");

  async function handleUpdate(e) {
    e.preventDefault();
    setIsDialogOpen(false);
    // changes made to ui
    const editedApplications = applications.map((application) => {
      if (application.id === applicationId) {
        if (jobTitle) {
          application.jobTitle = jobTitle;
        }
        if (companyName) {
          application.companyName = companyName;
        }
        if (notes) {
          application.notes = notes;
        }
        if (appliedDate) {
          application.appliedDate = appliedDate;
        }
        return application;
      } else {
        return application;
      }
    });

    setApplications(editedApplications);

    // changes made to db
    await updateApplication(
      applicationId,
      jobTitle,
      companyName,
      notes,
      appliedDate,
    );
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button>
          <MdEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {!isLoading ? (
          <form
            onSubmit={async (e) => {
              await handleUpdate(e);
            }}
          >
            <DialogHeader>
              <DialogTitle>Add Application</DialogTitle>
              <DialogDescription>
                Input the data you would like the edit
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                {error && <p>{errorMessage}</p>}
                <label htmlFor="company-name" className="text-right">
                  Company Name
                </label>
                <input
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={companyName}
                  id="company-name"
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
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="applied-date" className="text-right">
                  Applied Date
                </label>
                <input
                  onChange={(e) => setAppliedDate(e.target.value)}
                  value={appliedDate}
                  id="applied-date"
                  type={"date"}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        ) : (
          <Loader color={"border-blue-950"} />
        )}
      </DialogContent>
    </Dialog>
  );
}
