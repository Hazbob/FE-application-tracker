import { getTokenFromStorage } from "@/utils/tokenStorage.ts";

export default async function getApplications() {
  try {
    const token = await getTokenFromStorage();
    if (!token) {
      return;
    }
    const res = await fetch(import.meta.env.VITE_API_URL + "api/app", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
    });
    const parsedApplications = await res.json();
    return parsedApplications.data;
  } catch (error) {
    throw new Error("Error fetching your applications, please refresh");
  }
}
