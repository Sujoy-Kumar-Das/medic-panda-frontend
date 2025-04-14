import useCancelOrder from "@/hooks/useCancelOrder";
import { OrderStatus } from "@/types";
import { Chip, CircularProgress, Stack, Typography } from "@mui/material";

export default function OrderCancelButton({
  status,
  id,
}: {
  status: OrderStatus;
  id: string;
}) {
  // custom hook for handle the cancel order logic;
  const { handlerFunc, isLoading } = useCancelOrder();
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
          clickable={false}
          disabled={true}
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
          onClick={() => handlerFunc(id)}
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
