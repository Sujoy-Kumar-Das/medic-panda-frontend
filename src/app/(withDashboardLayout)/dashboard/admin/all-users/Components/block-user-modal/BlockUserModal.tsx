import DeleteModal from "@/components/modal/delete-modal/DeleteModal";
import { Dispatch, SetStateAction } from "react";
import BlockUserCancelButton from "./BlockUserCancelButton";
import BlockUserButton from "./ConfirmBlockUserButton";

// Define the types for the props
interface BlockUserModalProps {
  userId: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
}

export default function BlockUserModal({
  userId,
  open,
  setOpen,
  onClose,
}: BlockUserModalProps) {
  const handleClose = () => {
    setOpen((prev) => !prev);
    onClose();
  };

  return (
    <DeleteModal
      title="Warning: Block User"
      message="Are you sure you want to block this user?"
      open={open}
      setOpen={setOpen}
    >
      <BlockUserCancelButton onClose={handleClose} />
      <BlockUserButton userId={userId} onClose={handleClose} />
    </DeleteModal>
  );
}
