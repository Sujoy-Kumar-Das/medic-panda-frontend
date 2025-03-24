import useToggleState from "@/hooks/useToggleState";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
import OrderDetailsModal from "./OrderDetailsModal";

export default function OrderDetailsModalButton({
  orderId,
}: {
  orderId: string;
}) {
  const orderDetailsModal = useToggleState();

  return (
    <>
      <Button
        onClick={orderDetailsModal.onOpen}
        variant="contained"
        startIcon={<VisibilityIcon />}
        size="small"
        sx={{ p: 1 }}
      >
        View Details
      </Button>

      {orderDetailsModal.state && (
        <OrderDetailsModal
          open={orderDetailsModal.state}
          onClose={orderDetailsModal.onClose}
          orderId={orderId}
        />
      )}
    </>
  );
}
