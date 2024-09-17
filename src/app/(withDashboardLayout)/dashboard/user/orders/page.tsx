import { Box, Container, Typography } from "@mui/material";
import OrderPageTab from "./Components/OrderPageTab";

export default function OrdersPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Box mb={4}>
        <Typography
          component="h1"
          variant="h4"
          color="text.primary"
          gutterBottom
        >
          Order History
        </Typography>
        <Typography component="p" variant="h6" color="text.secondary">
          Track, return, or purchase items
        </Typography>
      </Box>
      <OrderPageTab />
    </Container>
  );
}
