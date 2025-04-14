import usePayment from "@/hooks/usePayment";
import { OrderStatus } from "@/types";
import { Chip, CircularProgress, Stack, Typography } from "@mui/material";

export default function OrderPaymentButton({
  status,
  id,
}: {
  status: OrderStatus;
  id: string;
}) {
  const { handlerFunc, isLoading } = usePayment();
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
          disabled={isLoading}
          onClick={() => handlerFunc(id)}
          sx={{
            fontWeight: 400,
            padding: 0,
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
