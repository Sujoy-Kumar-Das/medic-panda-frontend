import { usePaymentNowMutation } from "@/redux/api/payment.api";
import { IGenericErrorResponse, OrderStatus } from "@/types";
import { Chip, CircularProgress, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function OrderPaymentButton({
  status,
  id,
}: {
  status: OrderStatus;
  id: string;
}) {
  const [paymentNow, { isLoading, isError, error, isSuccess, data }] =
    usePaymentNowMutation();

  const router = useRouter();

  // Handle Payment Action
  const handlePaymentNow = async (id: string) => {
    await paymentNow(id);
  };

  // Manage payment redirection or error
  useEffect(() => {
    if (isSuccess) {
      router.replace(data.paymentUrl);
    } else if (isError) {
      toast.error((error as IGenericErrorResponse).message);
    }
  }, [data, isSuccess, isError, error, router]);

  return (
    <Stack
      direction={{ xs: "row", md: "column" }}
      alignItems="center"
      spacing={1}
    >
      <Typography variant="body2" fontWeight={600} textAlign="center">
        Payment Status
      </Typography>
      {status === OrderStatus.PENDING ? (
        <Chip
          label={
            isLoading ? (
              <CircularProgress size={16} color="inherit" />
            ) : (
              "Pay Now"
            )
          }
          color="primary"
          variant="outlined"
          clickable={!isLoading}
          onClick={() => handlePaymentNow(id)}
          sx={{
            fontWeight: 400,
            "&:hover": {
              color: "secondary.main",
              borderColor: "secondary.main",
            },
          }}
        />
      ) : (
        <Chip
          label="Paid"
          color="primary"
          sx={{
            bgcolor: "primary.main",
            color: "text.disabled",
            "&:hover": {
              bgcolor: "secondary.main",
            },
          }}
        />
      )}
    </Stack>
  );
}
