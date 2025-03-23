import DeleteModal from "@/components/modal/delete-modal/DeleteModal";
import UnBlockUserButton from "./ConfirmUnBlockUserButton";
import UnBlockUserCancelButton from "./UnBlockUserCancelButton";

// Define the types for the props
interface UnblockUserModalProps {
  userId: string;
  open: boolean;
  onModalClose: () => void;
  onClose: () => void;
}

export default function UnblockUserModal({
  userId,
  open,
  onModalClose,
  onClose,
}: UnblockUserModalProps) {
  const handleClose = () => {
    onModalClose();
    onClose();
  };
  return (
    <DeleteModal
      open={open}
      onClose={onModalClose}
      title="Confirm: Unblock User"
      message=" Are you sure you want to unblock this user? This action will grant the
          user access again."
    >
      <UnBlockUserCancelButton onClose={handleClose} />
      <UnBlockUserButton userId={userId} onClose={handleClose} />
    </DeleteModal>
  );
}
