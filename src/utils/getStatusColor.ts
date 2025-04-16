import { OrderStatus } from "@/types";

const getStatusColor = (status: OrderStatus) => {
  switch (status) {
    case OrderStatus.DELIVERED:
      return "success";
    case OrderStatus.CANCELED:
    case OrderStatus.RETURNED:
      return "error";
    default:
      return "warning";
  }
};

export default getStatusColor;
