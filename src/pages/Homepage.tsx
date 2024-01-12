import Header from "@/components/Header.tsx";
import { ApplicationCard } from "@/components/ApplicationCard.tsx";
import { InputButton } from "@/components/InputButton.tsx";
import { useState, useEffect } from "react";
import { getTokenFromStorage } from "@/utils/tokenStorage.ts";
import { useNavigate } from "react-router-dom";
import SignOutButton from "@/components/SignOutButton.tsx";
import getApplications from "@/services/getApplication.ts";
import ControlHub from "@/components/ControlHub.tsx";

export default function Homepage() {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [applications, setApplications]: any[] = useState([]);
  const [error, setError] = useState(false);
  const [filterStatus, setFilterStatus] = useState("none");
  const navigate = useNavigate();
  /*
useEffect to check if the user is logged in
 */
  useEffect(() => {
    getTokenFromStorage().then((data) => {
      if (!data) {
        navigate("/signin");
      }
    });
  }, [navigate]);
  /*
   //
   */
  /*
  useEffect to get the users applications
   */
  useEffect(() => {
    getApplications(filterStatus)
      .then((prevApplications) => {
        if (!prevApplications) {
          const applicationsCopy = [...applications];
          setApplications(applicationsCopy);
        }
        const applicationsCopy = [...prevApplications, ...applications];
        setApplications(applicationsCopy);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [filterStatus]);

  /*
   //
   */

  return (
    <div
      className={
        "flex-col flex justify-center items-center min-h-screen bg-blue-950 py-20 "
      }
    >
      <Header />
      {error ? error : ""}
      <div className={"flex gap-2 items-center"}>
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
        <SignOutButton />
      </div>
      <ControlHub
        setFilterStatus={setFilterStatus}
        applications={applications}
        setApplications={setApplications}
      />
      <ApplicationCard
        setApplications={setApplications}
        applications={applications}
        newApp={null}
        className={null}
      />
    </div>
  );
}
