import { OrderStatus } from "@/types";
import { IFilterItem } from "@/types/filter-item";
import randomUID from "@/utils/randomId";

// Shortcut filter options (used for quick access)
export const orderShortcutFilterItems: IFilterItem[] = [
  { id: randomUID(), query: "", title: "All", value: "" },
  {
    id: randomUID(),
    query: "status",
    title: "Pending",
    value: OrderStatus.PENDING,
  },
  { id: randomUID(), query: "status", title: "Paid", value: OrderStatus.PAID },
];

// All filter options (complete list of available filters for orders)
export const orderAllFilterOptions: IFilterItem[] = [
  { id: randomUID(), query: "status", title: "All", value: "" },
  {
    id: randomUID(),
    query: "status",
    title: "Pending",
    value: OrderStatus.PENDING,
  },
  { id: randomUID(), query: "status", title: "Paid", value: OrderStatus.PAID },
  {
    id: randomUID(),
    query: "status",
    title: "Processing",
    value: OrderStatus.PROCESSING,
  },
  {
    id: randomUID(),
    query: "status",
    title: "Shipped",
    value: OrderStatus.SHIPPED,
  },
  {
    id: randomUID(),
    query: "status",
    title: "Delivered",
    value: OrderStatus.DELIVERED,
  },
  {
    id: randomUID(),
    query: "status",
    title: "Canceled",
    value: OrderStatus.CANCELED,
  },
  {
    id: randomUID(),
    query: "status",
    title: "Returned",
    value: OrderStatus.RETURNED,
  },
  { id: randomUID(), query: "paymentStatus", title: "Paid", value: "paid" }, // Example of adding another filter for payment status
  { id: randomUID(), query: "paymentStatus", title: "Unpaid", value: "unpaid" },
  // You can add other filter types as needed (e.g., date range, customer, etc.)
];
