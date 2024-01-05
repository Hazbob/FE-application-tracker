import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function StatusDropdown({ currentStatus, status, setStatus }) {
  const handleSelectChange = (value: string) => {
    setStatus(value);
  };

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
