import { IOrder } from "@/types";
import { Box, Container } from "@mui/material";
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

      <Box sx={{ mt: 3, overflow: "auto" }}>
        <AdminOrderDataGrid
          orders={data}
          isLoading={isLoading}
          isError={isError}
        />
      </Box>
    </Container>
  );
}
