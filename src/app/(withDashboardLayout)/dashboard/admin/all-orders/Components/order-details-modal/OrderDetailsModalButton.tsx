import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
import { useState } from "react";
import OrderDetailsModal from "./OrderDetailsModal";

export default function OrderDetailsModalButton({
  orderId,
}: {
  orderId: string;
}) {
  const [isOpenDetails, setIsOpenOrderDetails] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpenOrderDetails(true)}
        variant="contained"
        startIcon={<VisibilityIcon />}
        size="small"
        sx={{ p: 1 }}
      >
        View Details
      </Button>
      {isOpenDetails && (
        <OrderDetailsModal
          open={isOpenDetails}
          setOpen={setIsOpenOrderDetails}
          orderId={orderId}
        />
      )}
    </>
  );
}
