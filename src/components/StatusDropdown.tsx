import { ComponentProps, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import updateStatus from "@/services/updateStatus.ts";

export function StatusDropdown({
  currentStatus,
  status,
  setStatus,
  appId,
}: ComponentProps<any>) {
  async function handleSelectChange(value: string) {
    try {
      setStatus(value); // update the UI to render optimistically to have responsive UI
      await updateStatus(appId, value);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Select
      className="w-[180px]"
      value={status}
      onValueChange={handleSelectChange}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Application Status</SelectLabel>
          <SelectItem value="APPLIED">Applied</SelectItem>
          <SelectItem value="INTERVIEW_SCHEDULED">
            Interview Scheduled
          </SelectItem>
          <SelectItem value="INTERVIEW_COMPLETED">
            Interview Completed
          </SelectItem>
          <SelectItem value="SKILL_ASSESSMENT">Skill Assessment</SelectItem>
          <SelectItem value="OFFER_ACCEPTED">Offer Accepted</SelectItem>
          <SelectItem value="OFFER_DECLINED">Offer Declined</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
