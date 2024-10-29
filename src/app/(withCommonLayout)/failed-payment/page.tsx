"use client";

import { usePaymentNowMutation } from "@/redux/api/payment.api";
import { IGenericErrorResponse } from "@/types";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Box, Button, Container, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function PaymentFailed() {
  const [
    paymentNow,
    { isLoading, isError, error, isSuccess, data: paymentData },
  ] = usePaymentNowMutation();

  const router = useRouter();
  const params = useSearchParams();
  const id = params.get("id") || "";

  const handleRetryPayment = async () => {
    if (id) {
      await paymentNow(id);
    }
  };

  const handleContactSupport = () => {
    router.push("/contact");
  };

  // manage payment handler state;
  useEffect(() => {
    if (isSuccess) {
      router.replace(paymentData.paymentUrl);
    } else if (isError) {
      toast.error((error as IGenericErrorResponse).message);
    }
  }, [paymentData, isSuccess, isError, error, router]);

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
            <Button
              variant="contained"
              color="primary"
              onClick={handleRetryPayment}
              sx={{
                textTransform: "none",
                borderRadius: 2,
                px: 3,
                py: 1,
              }}
            >
              Retry Payment
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleContactSupport}
              sx={{
                textTransform: "none",
                borderRadius: 2,
                px: 3,
                py: 1,
              }}
            >
              Contact Support
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
