import dayjs from "dayjs";

export const timeFormatter = (time: any) => {
  const date = dayjs(time).isValid() ? dayjs(time).toDate() : new Date(time);

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
};
