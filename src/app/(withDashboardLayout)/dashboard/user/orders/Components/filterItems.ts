import { OrderStatus } from "@/types";

export const filterItems = [
  { title: "all", value: "" },
  { title: OrderStatus.PENDING, value: OrderStatus.PENDING },
  { title: OrderStatus.PAID, value: OrderStatus.PAID },
  { title: OrderStatus.PROCESSING, value: OrderStatus.PROCESSING },
  { title: OrderStatus.SHIPPED, value: OrderStatus.SHIPPED },
  { title: OrderStatus.DELIVERED, value: OrderStatus.DELIVERED },
  { title: OrderStatus.CANCELED, value: OrderStatus.CANCELED },
  { title: OrderStatus.RETURNED, value: OrderStatus.RETURNED },
];
