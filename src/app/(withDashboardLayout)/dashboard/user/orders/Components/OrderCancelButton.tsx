import { useCancelOrderMutation } from "@/redux/api/order.api";
import { IGenericErrorResponse, OrderStatus } from "@/types";
import { Chip, CircularProgress, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { toast } from "sonner";

export default function OrderCancelButton({
  status,
  id,
}: {
  status: OrderStatus;
  id: string;
}) {
  const [cancelOrder, { isLoading, isError, isSuccess, error }] =
    useCancelOrderMutation();

  // Handle Cancel Order Action
  const handleCancelOrder = async () => {
    await cancelOrder(id);
  };

  // Manage order cancellation feedback
  useEffect(() => {
    if (isSuccess) {
      toast.success("Order canceled successfully.");
    } else if (isError) {
      toast.error((error as IGenericErrorResponse).message);
    }
  }, [isSuccess, isError, error]);

  return (
    <Stack
      direction={{ xs: "row", md: "column" }}
      alignItems="center"
      spacing={1}
    >
      <Typography variant="body2" fontWeight={600} textAlign="center">
        Cancel Order
      </Typography>
      {status === OrderStatus.CANCELED ? (
        <Chip
          label={"Canceled"}
          color="error"
          variant="outlined"
          clickable={true}
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
          label={
            isLoading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              "Cancel"
            )
          }
          color="secondary"
          variant="outlined"
          clickable={!isLoading}
          onClick={handleCancelOrder}
          sx={{
            fontWeight: 400,
            "&:hover": {
              color: "secondary.main",
              borderColor: "secondary.main",
            },
          }}
        />
      )}
    </Stack>
  );
}
