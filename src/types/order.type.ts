// OrderStatus enum
export enum OrderStatus {
  PAID = "paid",
  PENDING = "pending",
  PROCESSING = "processing",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
  CANCELED = "canceled",
  RETURNED = "returned",
}

export interface IOrderDetails {
  id: string;
  customerName: string;
  status: OrderStatus;
  shippingAddress: string;
  totalAmount: number;
  orderDate: string;
  product: {
    name: string;
    quantity: number;
    price: number;
  };
}
