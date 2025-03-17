import DeleteModal from "@/components/modal/delete-modal/DeleteModal";
import CancelButton from "@/components/ui/buttons/CancelButton";
import { Dispatch, SetStateAction } from "react";
import CategoryDeleteButton from "./CategoryDeleteButton";

interface CategoryDeleteModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
  categoryId: string;
}

export default function CategoryDeleteModal({
  open,
  setOpen,
  onClose,
  categoryId,
}: CategoryDeleteModalProps) {
  const handleCancelDelete = () => {
    setOpen((prev) => !prev);
    onClose();
  };

  return (
    <DeleteModal
      open={open}
      setOpen={setOpen}
      title="Are you sure?"
      message="This action is permanent and cannot be undone."
    >
      {/* Action Buttons */}
      <CancelButton onClose={handleCancelDelete} />
      <CategoryDeleteButton id={categoryId} onclose={handleCancelDelete} />
    </DeleteModal>
  );
}
