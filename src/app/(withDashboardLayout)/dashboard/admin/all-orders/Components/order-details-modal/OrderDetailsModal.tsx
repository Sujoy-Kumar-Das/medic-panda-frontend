import CustomModal from "@/components/modal/customModal/CustomModal";
import { IModifiedOrderData } from "@/types/IOrderDetails";
import { Typography } from "@mui/material";

import useOrderDataByAdmin from "@/hooks/useOrderDataByAdmin";
import { Dispatch, SetStateAction } from "react";
import OrderDetailsCompo from "../order-details-compo/OrderDetailsCompo";
import OrderDetailsSkeleton from "../order-details-compo/OrderDetailsSkeleton";

interface OrderDetailsModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  orderId: string;
}

export default function OrderDetailsModal({
  open,
  setOpen,
  orderId,
}: OrderDetailsModalProps) {
  const { orderData, isLoading } = useOrderDataByAdmin(orderId);

  const handleModal = () => {
    setOpen((prev) => !prev);
  };

  return (
    <CustomModal open={open} setOpen={setOpen}>
      {isLoading ? (
        <OrderDetailsSkeleton />
      ) : (
        <OrderDetailsCompo orderData={orderData as IModifiedOrderData} />
      )}

      <Typography
        onClick={handleModal}
        sx={{
          mt: 2,
          textTransform: "none",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        Close
      </Typography>
    </CustomModal>
  );
}
