import { IOrder } from "@/types";
import { Container } from "@mui/material";
import OrderHeader from "./OrderHeader";
import AdminOrderDataGrid from "./admin-order-data-grid/AdminOrderDataGrid";

interface OrdersCompoProps {
  data: IOrder[];
  isLoading: boolean;
  isError: boolean;
}

export default function OrdersCompo({
  data,
  isLoading,
  isError,
}: OrdersCompoProps) {
  return (
    <Container>
      <OrderHeader />
      <AdminOrderDataGrid
        orders={data}
        isLoading={isLoading}
        isError={isError}
      />
    </Container>
  );
}
