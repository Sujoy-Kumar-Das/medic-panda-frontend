import DeleteModal from "@/components/modal/delete-modal/DeleteModal";
import DeleteUserButton from "./ConfirmDeleteUserButton";
import DeleteUserCancelButton from "./DeleteUserCancelButton";

// Define the types for the props
interface DeleteUserModalProps {
  userId: string;
  open: boolean;
  onModalClose: () => void;
  onClose: () => void;
}

export default function DeleteUserModal({
  userId,
  open,
  onModalClose,
  onClose,
}: DeleteUserModalProps) {
  const handleClose = () => {
    onModalClose();
    onClose();
  };

  return (
    <DeleteModal
      title="Confirm User Deletion"
      message="This will permanently remove the user and their data. Proceed with caution."
      open={open}
      onClose={onModalClose}
    >
      <DeleteUserCancelButton onClose={handleClose} />
      <DeleteUserButton userId={userId} onClose={handleClose} />
    </DeleteModal>
  );
}
