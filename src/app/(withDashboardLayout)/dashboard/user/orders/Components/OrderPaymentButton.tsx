import { OrderStatus } from "@/types";
import { Chip, CircularProgress, Stack, Typography } from "@mui/material";

interface OrderPaymentButtonProps {
  status: OrderStatus;
  onPayment: () => Promise<void>;
  isPaymentLoading: boolean;
}

export default function OrderPaymentButton({
  status,
  onPayment,
  isPaymentLoading,
}: OrderPaymentButtonProps) {
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
            isPaymentLoading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              "Pay Now"
            )
          }
          color="primary"
          variant="outlined"
          clickable={!isPaymentLoading}
          disabled={isPaymentLoading}
          onClick={onPayment}
          sx={{
            fontWeight: 400,
            padding: 0,
            minWidth: 40,
            "&:hover": {
              color: "secondary.main",
              borderColor: "secondary.main",
            },
          }}
        />
      ) : (
        <Chip
          label={status}
          color="primary"
          sx={{
            bgcolor: "primary.main",
            color: "text.disabled",
            padding: 0,
            "&:hover": {
              bgcolor: "secondary.main",
            },
          }}
        />
      )}
    </Stack>
  );
}
