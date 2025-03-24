import FormModal from "@/components/modal/FormModal/FormModal";
import AddManufacturerForm from "./AddManufacturerForm";

interface AddManufacturerModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AddManufacturerModal({
  open,
  onClose,
}: AddManufacturerModalProps) {
  return (
    <FormModal
      open={open}
      title="Add Manufacturer"
      subtitle="Provide the necessary information to add a new manufacturer"
      onClose={onClose}
    >
      <AddManufacturerForm onClose={onClose} />
    </FormModal>
  );
}
