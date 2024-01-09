export function formatDate(dateString: string): string {
  const options: {
    [key: string]: string;
  } = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  return new Date(dateString).toLocaleString("en-GB", options);
}

export function convertDateFormatForUpdate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
}
