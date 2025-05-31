import FormModal from "@/components/modal/FormModal/FormModal";
import useChangeOrderStatus from "@/hooks/useChangeOrderStatus";
import { changeOrderStatusSchema } from "@/schemas/order.schema";
import ChangeOrderStatusForm from "./ChangeOrderStausForm";

interface ChangeOrderStatusModalProps {
  onClose: () => void;
  orderId: string;
}

export default function ChangeOrderStatusModal({
  onClose,
  orderId,
}: ChangeOrderStatusModalProps) {
  const { handlerFunc, isLoading } = useChangeOrderStatus(onClose);

  return (
    <FormModal open onClose={onClose} title="Change Order Status" subtitle="">
      <ChangeOrderStatusForm
        onSubmit={(data) => handlerFunc(orderId, data)}
        isLoading={isLoading}
        validationSchema={changeOrderStatusSchema}
      />
    </FormModal>
  );
}
