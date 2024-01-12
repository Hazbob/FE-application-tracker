import { UpdateAppInput } from "@/types/types.ts";
import { convertDateFormatForUpdate } from "@/utils/formatDate.ts";

export default function createInput(
  jobTitle: string | undefined,
  companyName: string | undefined,
  notes: string | undefined,
  appliedDate: string | undefined,
): UpdateAppInput {
  const output: UpdateAppInput = {};
  if (jobTitle) {
    output.jobTitle = jobTitle;
  }
  if (companyName) {
    output.companyName = companyName;
  }
  if (notes) {
    output.notes = notes;
  }
  if (appliedDate) {
    output.appliedDate = convertDateFormatForUpdate(appliedDate);
  }

  return output;
}
