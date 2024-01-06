import { getTokenFromStorage } from "@/utils/tokenStorage.ts";
import { Application, Setters } from "@/types/types.ts";

export default async function postApplication(
  companyName: string,
  jobTitle: string,
  notes: string,
) {
  const token = await getTokenFromStorage();
  try {
    const res = await fetch(import.meta.env.VITE_API_URL + "api/app", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ companyName, jobTitle, notes }),
    });
    const data = await res.json();
    return data.data; // this will return the new object with all the application data
  } catch (error) {
    throw error;
  }
}

export async function handleAddApp(
  e: null | any = null,
  setters: Setters,
  companyName: string,
  jobTitle: string,
  notes: string,
  applications: Application[],
) {
  setters.setLoading(true);
  if (e) {
    e.preventDefault();
  }
  const applicationsCopy = [...applications];

  /*
  Backend part of adding application
   */
  try {
    const newApplication = await postApplication(companyName, jobTitle, notes);

    /*
      Frontend part of the functionality
    */
    applicationsCopy.unshift(newApplication);
    setters.setApplications(applicationsCopy);
    setters.setLoading(false);
    setters.setIsDialogOpen(false);
    setters.setNeedRetry(false);
    setters.setError(false);
  } catch (error: any) {
    setters.setError(true);
    setters.setErrorMessage(error.message || "An Error Occured");
    setters.setNeedRetry(true);
  }
}
