import { getTokenFromStorage } from "@/utils/tokenStorage.ts";

export default async function (applicationId: string, newStatus: string) {
  try {
    const token = await getTokenFromStorage();
    const res = await fetch(
      import.meta.env.VITE_API_URL + `api/app/${applicationId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ status: newStatus }),
      },
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    throw error;
  }
}