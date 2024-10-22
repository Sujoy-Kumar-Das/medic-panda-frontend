import { OrderStatus } from "@/types";

const getStatusStep = (status: OrderStatus) => {
  switch (status) {
    case OrderStatus.PENDING:
      return 0;
    case OrderStatus.PAID:
      return 1;
    case OrderStatus.PROCESSING:
      return 2;
    case OrderStatus.SHIPPED:
      return 3;
    case OrderStatus.DELIVERED:
      return 4;
    default:
      return -1;
  }
};

export default getStatusStep;
