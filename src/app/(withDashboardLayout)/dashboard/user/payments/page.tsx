import { Box, Container, Typography } from "@mui/material";
import PaymentTab from "./Components/PaymentTab";

export default function page() {
  return (
    <Container>
      <Box mb={3}>
        <Typography component="h1" variant="h4" color="text.primary">
          Payment History And Installments
        </Typography>
        <Typography component="h1" variant="h6" color="text.secondary">
          manage payment history and installments
        </Typography>
      </Box>
      <PaymentTab />
    </Container>
  );
}
