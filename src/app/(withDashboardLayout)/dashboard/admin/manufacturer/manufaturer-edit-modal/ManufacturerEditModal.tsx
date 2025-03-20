import FormModal from "@/components/modal/FormModal/FormModal";
import { IManufacturer } from "@/types/Imanufacturer.type";
import { Dispatch, SetStateAction } from "react";
import ManufacturerEditForm from "./ManufacturerEditForm";

interface ManufacturerEditModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
  manufacturer: IManufacturer;
}

export default function ManufacturerEditModal({
  open,
  setOpen,
  onClose,
  manufacturer,
}: ManufacturerEditModalProps) {
  // Handle modal close
  const handleCloseModal = () => {
    setOpen(false);
    onClose();
  };

  return (
    <FormModal
      open={open}
      setOpen={setOpen}
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
