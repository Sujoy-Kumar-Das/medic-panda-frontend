import DeleteModal from "@/components/modal/delete-modal/DeleteModal";
import { Dispatch, SetStateAction } from "react";
import UnBlockUserButton from "./ConfirmUnBlockUserButton";
import UnBlockUserCancelButton from "./UnBlockUserCancelButton";

// Define the types for the props
interface UnblockUserModalProps {
  userId: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
}

export default function UnblockUserModal({
  userId,
  open,
  setOpen,
  onClose,
}: UnblockUserModalProps) {
  const handleClose = () => {
    setOpen((prev) => !prev);
    onClose();
  };
  return (
    <DeleteModal
      open={open}
      setOpen={setOpen}
      title="Confirm: Unblock User"
      message=" Are you sure you want to unblock this user? This action will grant the
          user access again."
    >
      <UnBlockUserCancelButton onClose={handleClose} />
      <UnBlockUserButton userId={userId} onClose={handleClose} />
    </DeleteModal>
  );
}
