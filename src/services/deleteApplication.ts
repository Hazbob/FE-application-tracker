import { getTokenFromStorage } from "@/utils/tokenStorage.ts";

export default async function deleteApplication(
  applicationId: string,
  applications: any[],
  setApplications: any,
) {
  try {
    const token = await getTokenFromStorage();
    await fetch(import.meta.env.VITE_API_URL + `api/app/${applicationId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
    });
    const updatedArray = applications.filter(
      (el: any) => el.id !== applicationId,
    );
    setApplications(updatedArray);
  } catch (error) {
    throw new Error(
      "There was a problem deleting your application, please refresh",
    );
  }
}
