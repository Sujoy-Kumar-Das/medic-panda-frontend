"use client";
import WaringModal from "@/components/modal/warning-modal/WarningModal";
import CancelButton from "@/components/ui/buttons/CancelButton";
import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useDeleteUser from "@/hooks/useDeleteUser";
import { Divider } from "@mui/material";

// Define the types for the props
interface DeleteUserModalProps {
  userId: string;
  open: boolean;
  onModalClose: () => void;
}

export default function DeleteUserModal({
  userId,
  open,
  onModalClose,
}: DeleteUserModalProps) {
  const { handlerFunc, isLoading } = useDeleteUser(onModalClose);
  return (
    <WaringModal open={open} onClose={onModalClose}>
      <WaringModal.Title>Confirm User Deletion</WaringModal.Title>
      <WaringModal.Message>
        This will permanently remove the user and their data. Proceed with
        caution.
      </WaringModal.Message>

      <Divider sx={{ my: 2 }} />

      <WaringModal.Content>
        <CancelButton
          onClose={onModalClose}
          cancelMessage={`You Canceled Deleting the user`}
        >
          Cancel
        </CancelButton>

        <LoaderButton isLoading={isLoading} onClick={() => handlerFunc(userId)}>
          Delete
        </LoaderButton>
      </WaringModal.Content>
    </WaringModal>
  );
}
