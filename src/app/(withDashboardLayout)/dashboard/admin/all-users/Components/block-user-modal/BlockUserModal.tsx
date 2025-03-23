import DeleteModal from "@/components/modal/delete-modal/DeleteModal";
import BlockUserCancelButton from "./BlockUserCancelButton";
import BlockUserButton from "./ConfirmBlockUserButton";

// Define the types for the props
interface BlockUserModalProps {
  userId: string;
  open: boolean;
  onModalClose: () => void;
  onClose: () => void;
}

export default function BlockUserModal({
  userId,
  open,
  onModalClose,
  onClose,
}: BlockUserModalProps) {
  const handleClose = () => {
    onModalClose();
    onClose();
  };

  return (
    <DeleteModal
      title="Warning: Block User"
      message="Are you sure you want to block this user?"
      open={open}
      onClose={onModalClose}
    >
      <BlockUserCancelButton onClose={handleClose} />
      <BlockUserButton userId={userId} onClose={handleClose} />
    </DeleteModal>
  );
}
