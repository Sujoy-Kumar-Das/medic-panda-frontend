import { IProduct } from "./product.type";

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

export interface IShippingAddress {
  city: string;
  street: string;
  postalCode: string;
  country: string;
  contact: string;
}

export interface IOrder {
  _id: string;
  user: string;
  product: IProduct;
  shippingAddress?: IShippingAddress;
  paymentId: string;
  quantity: number;
  total: number;
  isPaid: boolean;
  status: OrderStatus;
  createdAt: string;
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
