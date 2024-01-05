import Header from "@/components/Header.tsx";
import { ApplicationCard } from "@/components/ApplicationCard.tsx";
import { InputButton } from "@/components/InputButton.tsx";
import { useState } from "react";

export default function Homepage() {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [applications, setApplications] = useState([
    {
      jobTitle: "Junior software developer",
      companyName: "Mcdonalds",
      notes: "1",
      status: "APPLIED",
      createdAt: "20/20/20",
      appliedDate: null,
      id: "adadwadaiwhdoaihwdoa",
    },
    {
      jobTitle: "Junior software developer",
      companyName: "Mcdonalds",
      notes: "2",
      status: "APPLIED",
      appliedDate: null,
      id: "adadwadaiwhdoaddddihwdoa",
    },
    {
      jobTitle: "Junior software developer",
      companyName: "Mcdonalds",
      notes: "3 lorem",
      status: "APPLIED",
      createdAt: "20/20/20",
      appliedDate: "20/20/20",
      id: "adadwadaiwhdoaihwaaaaadoa",
    },
    {
      jobTitle: "Junior software developer",
      companyName: "Mcdonalds",
      notes: "4 lorem",
      status: "APPLIED",
      createdAt: "20/20/20",
      appliedDate: "20/20/20",
      id: "adadwadaiwhdoaihwdwwwwwwoa",
    },
    {
      jobTitle: "Junior software developer",
      companyName: "Mcdonalds",
      notes: "5 lorem",
      status: "APPLIED",
      createdAt: "20/20/20",
      appliedDate: "20/20/20",
      id: "adadwadai2222whdoaihwdoa",
    },
    {
      jobTitle: "Junior software developer",
      companyName: "Mcdonalds",
      notes: "6 lorem",
      status: "APPLIED",
      createdAt: "20/20/20",
      appliedDate: "20/20/20",
      id: "adadwadaiwhdoaih;;;;;;wdoa",
    },
    {
      jobTitle: "Junior software developer",
      companyName: "Mcdonalds",
      notes: "7 lorem",
      status: "APPLIED",
      createdAt: "20/20/20",
      appliedDate: "20/20/20",
      id: "adadwadaiwhdoaikkkkkkmkknknhwdoa",
    },
    {
      jobTitle: "Junior software developer",
      companyName: "Mcdonalds",
      notes: "8 lorem",
      status: "APPLIED",
      createdAt: "20/20/20",
      appliedDate: "20/20/20",
      id: "adadwadaiwhdoa8768gaiugsdiaugihwdoa",
    },
  ]);
  return (
    <div
      className={
        "flex-col flex justify-center items-center min-h-screen bg-blue-950 py-20 "
      }
    >
      <Header />
      <InputButton
        companyName={companyName}
        setCompanyName={setCompanyName}
        jobTitle={jobTitle}
        setJobTitle={setJobTitle}
        notes={notes}
        setNotes={setNotes}
        setApplications={setApplications}
        applications={applications}
      />
      <ApplicationCard
        setApplications={setApplications}
        applications={applications}
      />
    </div>
  );
}
