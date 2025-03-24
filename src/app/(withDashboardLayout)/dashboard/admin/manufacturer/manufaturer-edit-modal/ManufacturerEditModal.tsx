import FormModal from "@/components/modal/FormModal/FormModal";
import { IManufacturer } from "@/types/Imanufacturer.type";
import ManufacturerEditForm from "./ManufacturerEditForm";

interface ManufacturerEditModalProps {
  open: boolean;
  onModalClose: () => void;
  onClose: () => void;
  manufacturer: IManufacturer;
}

export default function ManufacturerEditModal({
  open,
  onModalClose,
  onClose,
  manufacturer,
}: ManufacturerEditModalProps) {
  // Handle modal close
  const handleCloseModal = () => {
    onModalClose();
    onClose();
  };

  return (
    <FormModal
      open={open}
      onClose={handleCloseModal}
      title="Edit Manufacturer"
      subtitle="Modify the information of the manufacturer below"
    >
      <ManufacturerEditForm
        onClose={handleCloseModal}
        manufacturer={manufacturer}
      />
    </FormModal>
  );
}
