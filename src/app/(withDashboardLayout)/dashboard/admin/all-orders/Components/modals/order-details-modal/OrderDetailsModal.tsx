import { IModifiedOrderData } from "@/types/IOrderDetails";

import FormModal from "@/components/modal/FormModal/FormModal";
import useOrderDataByAdmin from "@/hooks/useOrderDataByAdmin";
import OrderDetailsCompo from "./OrderDetailsCompo";
import OrderDetailsSkeleton from "./OrderDetailsSkeleton";

interface OrderDetailsModalProps {
  onClose: () => void;
  orderId: string;
}

export default function OrderDetailsModal({
  onClose,
  orderId,
}: OrderDetailsModalProps) {
  const { orderData, isLoading } = useOrderDataByAdmin(orderId);

  return (
    <FormModal
      open
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
