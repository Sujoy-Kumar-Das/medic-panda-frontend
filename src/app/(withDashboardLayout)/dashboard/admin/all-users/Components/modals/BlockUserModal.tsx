import WaringModal from "@/components/modal/warning-modal/WarningModal";
import CancelButton from "@/components/ui/buttons/CancelButton";
import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useBlockUser from "@/hooks/useBlockUser";
import { Divider } from "@mui/material";

// Define the types for the props
interface BlockUserModalProps {
  userId: string;
  open: boolean;
  onModalClose: () => void;
}

export default function BlockUserModal({
  userId,
  open,
  onModalClose,
}: BlockUserModalProps) {
  const { handleFunc, isLoading } = useBlockUser(onModalClose);

  return (
    <WaringModal open={open} onClose={onModalClose}>
      <WaringModal.Title>Warning: Block User</WaringModal.Title>
      <WaringModal.Message>
        Are you sure you want to block this user?
      </WaringModal.Message>

      <Divider sx={{ my: 2 }} />
      <WaringModal.Content>
        <CancelButton
          onClose={onModalClose}
          cancelMessage="You Canceled blocking the user."
        >
          Cancel
        </CancelButton>

        <LoaderButton onClick={() => handleFunc(userId)} isLoading={isLoading}>
          Block User
        </LoaderButton>
      </WaringModal.Content>
    </WaringModal>
  );
}
