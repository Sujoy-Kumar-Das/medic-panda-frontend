import { IModifiedOrderData } from "@/types/IOrderDetails";

import FormModal from "@/components/modal/FormModal/FormModal";
import useOrderDataByAdmin from "@/hooks/useOrderDataByAdmin";
import OrderDetailsCompo from "./order-details-compo/OrderDetailsCompo";
import OrderDetailsSkeleton from "./order-details-compo/OrderDetailsSkeleton";

interface OrderDetailsModalProps {
  open: boolean;
  onClose: () => void;
  orderId: string;
}

export default function OrderDetailsModal({
  open,
  onClose,
  orderId,
}: OrderDetailsModalProps) {
  const { orderData, isLoading } = useOrderDataByAdmin(orderId);

  return (
    <FormModal
      open={open}
      onClose={onClose}
      title="Order Details"
      subtitle=" Manage and review the order information for this transaction."
    >
      {isLoading ? (
        <OrderDetailsSkeleton />
      ) : (
        <OrderDetailsCompo orderData={orderData as IModifiedOrderData} />
      )}
    </FormModal>
  );
}
