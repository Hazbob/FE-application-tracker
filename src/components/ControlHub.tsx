import { FilterByDropdown } from "@/components/FilterByDropdown.tsx";
import { MdOutlineFilterAlt } from "react-icons/md";

export default function ControlHub({
  setFilterStatus,
  applications,
  setApplications,
}) {
  const count = applications.length;
  return (
    <div className={"w-full bg-white mb-2 sm:w-1/3 p-2 rounded-xl"}>
      <h1>Total Applications: {count}</h1>
      <div className={"flex p-2"}>
        <MdOutlineFilterAlt size={"2.5em"} />

        <FilterByDropdown
          aria-label={"Select a status to filter applications by"}
          setFilterStatus={setFilterStatus}
          applications={applications}
          setApplications={setApplications}
        />
      </div>
    </div>
  );
}
