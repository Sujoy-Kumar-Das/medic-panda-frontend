import DeleteModal from "@/components/modal/delete-modal/DeleteModal";
import CancelButton from "@/components/ui/buttons/CancelButton";
import CategoryDeleteButton from "./CategoryDeleteButton";

interface CategoryDeleteModalProps {
  open: boolean;
  onModalClose: () => void;
  onClose: () => void;
  categoryId: string;
}

export default function CategoryDeleteModal({
  open,
  onModalClose,
  onClose,
  categoryId,
}: CategoryDeleteModalProps) {
  const handleCancelDelete = () => {
    onModalClose();
    onClose();
  };

  return (
    <DeleteModal
      open={open}
      onClose={handleCancelDelete}
      title="Are you sure?"
      message="This action is permanent and cannot be undone."
    >
      {/* Action Buttons */}
      <CancelButton onClose={handleCancelDelete}>Cancel</CancelButton>
      <CategoryDeleteButton id={categoryId} onClose={handleCancelDelete} />
    </DeleteModal>
  );
}
