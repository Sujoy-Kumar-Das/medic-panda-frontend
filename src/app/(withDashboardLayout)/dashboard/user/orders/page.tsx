import { Box, Container, Typography } from "@mui/material";
import OrderPageTab from "./Components/OrderPageTab";

export default function OrdersPage() {
  return (
    <Container>
      <Box mb={3}>
        <Typography component="h1" variant="h4" color="text.primary">
          Order History
        </Typography>
        <Typography component="h1" variant="h6" color="text.secondary">
          Track, return or purchase items
        </Typography>
      </Box>
      <OrderPageTab />
    </Container>
  );
}
