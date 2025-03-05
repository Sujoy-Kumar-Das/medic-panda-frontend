import DeleteModal from "@/components/modal/delete-modal/DeleteModal";
import { Dispatch, SetStateAction } from "react";
import DeleteUserButton from "./ConfirmDeleteUserButton";
import DeleteUserCancelButton from "./DeleteUserCancelButton";

// Define the types for the props
interface DeleteUserModalProps {
  userId: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
}

export default function DeleteUserModal({
  userId,
  open,
  setOpen,
  onClose,
}: DeleteUserModalProps) {
  const handleClose = () => {
    setOpen((prev) => !prev);
    onClose();
  };

  return (
    <DeleteModal
      title="Confirm User Deletion"
      message="This will permanently remove the user and their data. Proceed with caution."
      open={open}
      setOpen={setOpen}
    >
      <DeleteUserCancelButton onClose={handleClose} />
      <DeleteUserButton userId={userId} onClose={handleClose} />
    </DeleteModal>
  );
}
