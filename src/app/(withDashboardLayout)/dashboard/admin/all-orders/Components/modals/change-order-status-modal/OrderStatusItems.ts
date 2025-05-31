import { OrderStatus } from "@/types";
import randomUID from "@/utils/randomId";

// Define the Order Status Items
export const OrderStatusItems = [
  {
    id: randomUID(),
    value: OrderStatus.PROCESSING,
    title: OrderStatus.PROCESSING,
  },
  {
    id: randomUID(),
    value: OrderStatus.SHIPPED,
    title: OrderStatus.SHIPPED,
  },
  {
    id: randomUID(),
    value: OrderStatus.DELIVERED,
    title: OrderStatus.DELIVERED,
  },
  {
    id: randomUID(),
    value: OrderStatus.CANCELED,
    title: OrderStatus.CANCELED,
  },
];
