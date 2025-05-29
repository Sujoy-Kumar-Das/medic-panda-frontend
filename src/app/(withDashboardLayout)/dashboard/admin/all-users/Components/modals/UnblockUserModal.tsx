"use client";
import WaringModal from "@/components/modal/warning-modal/WarningModal";
import CancelButton from "@/components/ui/buttons/CancelButton";
import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useUnblockUser from "@/hooks/useUnblockUser";
import { Divider } from "@mui/material";

// Define the types for the props
interface UnblockUserModalProps {
  userId: string;
  open: boolean;
  onModalClose: () => void;
}

export default function UnblockUserModal({
  userId,
  open,
  onModalClose,
}: UnblockUserModalProps) {
  const { handlerFunc, isLoading } = useUnblockUser(onModalClose);

  return (
    <WaringModal open={open} onClose={onModalClose}>
      <WaringModal.Title>Confirm: Unblock User</WaringModal.Title>
      <WaringModal.Message>
        {" "}
        Are you sure you want to unblock this user? This action will grant the
        user access again.
      </WaringModal.Message>

      <Divider sx={{ my: 2 }} />

      <WaringModal.Content>
        <CancelButton
          onClose={onModalClose}
          cancelMessage="Unblock action canceled."
        >
          Cancel
        </CancelButton>

        <LoaderButton onClick={() => handlerFunc(userId)} isLoading={isLoading}>
          Block User
        </LoaderButton>
      </WaringModal.Content>
    </WaringModal>
  );
}
