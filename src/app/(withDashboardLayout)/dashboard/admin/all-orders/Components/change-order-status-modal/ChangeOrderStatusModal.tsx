import FormModal from "@/components/modal/FormModal/FormModal";
import ChangeOrderStatusForm from "./ChangeOrderStausForm";

interface ChangeOrderStatusModalProps {
  open: boolean;
  onClose: () => void;
  orderId: string;
}

export default function ChangeOrderStatusModal({
  open,
  onClose,
  orderId,
}: ChangeOrderStatusModalProps) {
  return (
    <FormModal
      open={open}
      onClose={onClose}
      title="Change Order Status"
      subtitle=""
    >
      <ChangeOrderStatusForm orderId={orderId} onClose={onClose} />
    </FormModal>
  );
}
