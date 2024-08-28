import dayjs from "dayjs";

export const dateFormatter = (value: any) => {
  const date = dayjs(value).isValid() ? dayjs(value).toDate() : new Date(value);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};
