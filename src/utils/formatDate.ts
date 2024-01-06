export function formatDate(dateString: string): string {
  const options: {
    [key: string]: string;
  } = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleString("en-GB", options);
}
