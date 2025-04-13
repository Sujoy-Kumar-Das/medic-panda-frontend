import { OrderStatus } from "@/types";
import randomUID from "@/utils/randomId";

export const shortcutOrderFilterOptions = [
  { id: randomUID(), query: "status", title: "All", value: "" },
  {
    id: randomUID(),
    query: "status",
    title: "Pending",
    value: OrderStatus.PENDING,
  },
  { id: randomUID(), query: "status", title: "Paid", value: OrderStatus.PAID },
];

export const allOrderFilterItems = [
  { query: "status", id: randomUID(), title: "All", value: "" },
  {
    query: "status",
    id: randomUID(),
    title: OrderStatus.PENDING,
    value: OrderStatus.PENDING,
  },
  {
    query: "status",
    id: randomUID(),
    title: OrderStatus.PAID,
    value: OrderStatus.PAID,
  },
  {
    query: "status",
    id: randomUID(),
    title: OrderStatus.PROCESSING,
    value: OrderStatus.PROCESSING,
  },
  {
    query: "status",
    id: randomUID(),
    title: OrderStatus.SHIPPED,
    value: OrderStatus.SHIPPED,
  },
  {
    query: "status",
    id: randomUID(),
    title: OrderStatus.DELIVERED,
    value: OrderStatus.DELIVERED,
  },
  {
    query: "status",
    id: randomUID(),
    title: OrderStatus.CANCELED,
    value: OrderStatus.CANCELED,
  },
  {
    query: "status",
    id: randomUID(),
    title: OrderStatus.RETURNED,
    value: OrderStatus.RETURNED,
  },
];
