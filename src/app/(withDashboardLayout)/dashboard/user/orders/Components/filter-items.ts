import { OrderStatus } from "@/types";
import randomUID from "@/utils/randomId";

export const shortcutOrderFilterOptions = [
  { id: randomUID(), query: "", title: "All", value: "" },
  { id: randomUID(), query: "", title: "Pending", value: "" },
  { id: randomUID(), query: "", title: "Paid", value: "" },
];

export const allOrderFilterItems = [
  { query: "", id: randomUID(), title: "All", value: "" },
  {
    query: "",
    id: randomUID(),
    title: OrderStatus.PENDING,
    value: OrderStatus.PENDING,
  },
  {
    query: "",
    id: randomUID(),
    title: OrderStatus.PAID,
    value: OrderStatus.PAID,
  },
  {
    query: "",
    id: randomUID(),
    title: OrderStatus.PROCESSING,
    value: OrderStatus.PROCESSING,
  },
  {
    query: "",
    id: randomUID(),
    title: OrderStatus.SHIPPED,
    value: OrderStatus.SHIPPED,
  },
  {
    query: "",
    id: randomUID(),
    title: OrderStatus.DELIVERED,
    value: OrderStatus.DELIVERED,
  },
  {
    query: "",
    id: randomUID(),
    title: OrderStatus.CANCELED,
    value: OrderStatus.CANCELED,
  },
  {
    query: "",
    id: randomUID(),
    title: OrderStatus.RETURNED,
    value: OrderStatus.RETURNED,
  },
];
