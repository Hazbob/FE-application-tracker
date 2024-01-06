import { Button } from "@/components/ui/button.tsx";
import { RetryButtonArgs } from "@/types/types.ts";

export default function RetryButton({
  funcToRetry,
  companyName,
  jobTitle,
  notes,
  setters,
  applications,
}: RetryButtonArgs) {
  function handleRetry(): void {
    funcToRetry(null, setters, companyName, jobTitle, notes, applications);
  }
  return <Button onClick={handleRetry}>Retry</Button>;
}
