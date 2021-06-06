export const required = (value: string) => (value ? undefined : "Required");
export const duration = (value: string) =>
  value === "00:00:00" ? "Required" : undefined;
