import { getTokenFromStorage } from "@/utils/tokenStorage.ts";

export default async function getApplications(filterStatus: string) {
  try {
    const token = await getTokenFromStorage();
    if (!token) {
      return;
    }

    let queryString: string;
    if (filterStatus !== "Null" && filterStatus && filterStatus !== "none") {
      queryString = `api/app?status=${filterStatus}`;
    } else {
      queryString = "api/app";
    }

    const res = await fetch(import.meta.env.VITE_API_URL + queryString, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
    });
    const parsedApplications = await res.json();
    if (parsedApplications.length === 0) {
      throw new Error("No applications yet, get applying!!!");
    }

    return parsedApplications.data;
  } catch (error) {
    throw new Error("Error fetching your applications, please refresh");
  }
}
