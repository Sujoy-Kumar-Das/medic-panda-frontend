import FormModal from "@/components/modal/FormModal/FormModal";
import { Dispatch, SetStateAction } from "react";
import AddManufacturerForm from "./AddManufacturerForm";

interface AddManufacturerModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
}

export default function AddManufacturerModal({
  open,
  setOpen,
  onClose,
}: AddManufacturerModalProps) {
  return (
    <FormModal
      open={open}
      setOpen={setOpen}
      title="Add Manufacturer"
      subtitle="Provide the necessary information to add a new manufacturer"
      onClose={onClose}
    >
      <AddManufacturerForm onClose={onClose} />
    </FormModal>
  );
}
