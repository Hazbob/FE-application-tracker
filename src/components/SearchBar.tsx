import { Input } from "@/components/ui/input";

export default function SearchBar({
  applications,
  setSearching,
  setSearchedApps,
}) {
  function handleFormChange(e) {
    if (e.target.value === "") {
      setSearching(false);
    } else {
      setSearching(true);
      const searched = applications.filter((app) => {
        return app.companyName
          .toLowerCase()
          .includes(e.target.value.toLowerCase()); //had to do this uncontrolled as async state messed up search
      });
      setSearchedApps(searched);
    }
  }

  return (
    <Input onChange={handleFormChange} placeholder={"Search Company Name"} />
  );
}
