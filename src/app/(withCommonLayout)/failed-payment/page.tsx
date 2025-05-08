"use client";
import usePayment from "@/hooks/usePayment";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PaymentFailed() {
  const { handlerFunc, isLoading } = usePayment();

  const params = useSearchParams();
  const id = params.get("id") || "";

  return (
    <Box>
      <Container sx={{ textAlign: "center", py: 10 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <ErrorOutlineIcon color="error" sx={{ fontSize: 80, mb: 2 }} />
          <Typography variant="h4" component="h1" gutterBottom color="error">
            Payment Failed
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Unfortunately, we couldn’t process your payment. Please try again or
            contact support if the issue persists.
          </Typography>

          <Box display="flex" gap={2} mt={3}>
            <LoadingButton
              variant="contained"
              color="primary"
              onClick={() => handlerFunc(id)}
              loadingIndicator={
                <Typography fontSize="0.875rem" fontWeight={500}>
                  Retrying Your Payment
                </Typography>
              }
              loading={isLoading}
              sx={{
                textTransform: "none",
                borderRadius: 2,
                px: 3,
                py: 1,
              }}
            >
              Retry Payment
            </LoadingButton>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              href="/dashboard/user/orders"
              sx={{
                textTransform: "none",
                borderRadius: 2,
                px: 3,
                py: 1,
              }}
            >
              Back To Order
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
