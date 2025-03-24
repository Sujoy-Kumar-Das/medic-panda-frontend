import DeleteModal from "@/components/modal/delete-modal/DeleteModal";
import CancelButton from "@/components/ui/buttons/CancelButton";
import ConfirmManufacturerDeleteButton from "./ConfirmManufacturerDeleteButton";

interface ManufacturerDeleteModalProps {
  open: boolean;
  onModalClose: () => void;
  onClose: () => void;
  id: string;
}

export default function ManufacturerDeleteModal({
  open,
  onModalClose,
  onClose,
  id,
}: ManufacturerDeleteModalProps) {
  const handleCloseModal = () => {
    onModalClose();
    onClose();
  };
  return (
    <DeleteModal open={open} onClose={handleCloseModal}>
      <CancelButton onClose={handleCloseModal}>Cancel</CancelButton>
      <ConfirmManufacturerDeleteButton onClose={handleCloseModal} id={id} />
    </DeleteModal>
  );
}
