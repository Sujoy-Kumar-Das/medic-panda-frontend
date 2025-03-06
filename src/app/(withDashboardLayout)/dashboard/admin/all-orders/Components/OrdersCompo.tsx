import { IOrder } from "@/types";
import { Container } from "@mui/material";
import OrderHeader from "./OrderHeader";
import AdminOrderDataGrid from "./admin-order-data-grid/AdminOrderDataGrid";

export default function OrdersCompo({ data }: { data: IOrder[] }) {
  return (
    <Container>
      <OrderHeader />
      <AdminOrderDataGrid orders={data} />
    </Container>
  );
}
