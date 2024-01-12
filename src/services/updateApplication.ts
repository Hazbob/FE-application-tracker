import { getTokenFromStorage } from "@/utils/tokenStorage.ts";
import { UpdateAppInput } from "@/types/types.ts";
import createInput from "@/utils/inputFactory.ts";

export default async function updateApplication(
  applicationId: string | undefined,
  jobTitle: string | undefined,
  companyName: string | undefined,
  notes: string | undefined,
  appliedDate: string | undefined,
) {
  const token = await getTokenFromStorage();
  /*
  
   */
  /*
  user input below
   */

  const input: UpdateAppInput = createInput(
    jobTitle,
    companyName,
    notes,
    appliedDate,
  );
  try {
    await fetch(import.meta.env.VITE_API_URL + `api/app/${applicationId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(input),
    });
  } catch (error) {
    console.log(error);
  }
}
