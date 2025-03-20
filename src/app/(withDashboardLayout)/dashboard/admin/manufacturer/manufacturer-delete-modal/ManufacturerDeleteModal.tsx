import DeleteModal from "@/components/modal/delete-modal/DeleteModal";
import CancelButton from "@/components/ui/buttons/CancelButton";
import { Dispatch, SetStateAction } from "react";
import ConfirmManufacturerDeleteButton from "./ConfirmManufacturerDeleteButton";

interface ManufacturerDeleteModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
  id: string;
}

export default function ManufacturerDeleteModal({
  open,
  setOpen,
  onClose,
  id,
}: ManufacturerDeleteModalProps) {
  const handleCancel = () => {
    setOpen((prev) => !prev);
    onClose();
  };
  return (
    <DeleteModal open={open} setOpen={setOpen}>
      <CancelButton onClose={handleCancel}>Cancel</CancelButton>
      <ConfirmManufacturerDeleteButton onClose={onClose} id={id} />
    </DeleteModal>
  );
}
