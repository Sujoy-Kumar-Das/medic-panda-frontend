import { Container } from "@mui/material";
import OrderHeader from "./OrderHeader";
import AdminOrderDataGrid from "./admin-order-data-grid/AdminOrderDataGrid";

export default function OrdersCompo({ data }) {
  console.log(data);
  return (
    <Container>
      <OrderHeader />
      <AdminOrderDataGrid orders={data} />
    </Container>
  );
}
