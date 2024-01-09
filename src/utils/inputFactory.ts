import { UpdateAppInput } from "@/types/types.ts";
import { convertDateFormatForUpdate, formatDate } from "@/utils/formatDate.ts";

export default function createInput(
  jobTitle: string,
  companyName: string,
  notes: string,
  appliedDate: string,
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
