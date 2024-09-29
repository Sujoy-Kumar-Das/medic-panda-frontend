import Header from "@/components/shared/header/Header";
import { Container } from "@mui/material";
import OrderPageTab from "./Components/OrderPageTab";

export default function OrdersPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Header
        title="Your Orders"
        subtitle="Manage your orders, track their status, and view details for each transaction."
      />
      <OrderPageTab />
    </Container>
  );
}
