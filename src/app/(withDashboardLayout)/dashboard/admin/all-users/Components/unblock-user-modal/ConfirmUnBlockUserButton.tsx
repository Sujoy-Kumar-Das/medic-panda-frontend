import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useUnblockUser from "@/hooks/useUnblockUser";

interface UnBlockUserButtonProps {
  userId: string;
  onClose: () => void;
}

const ConfirmUnBlockUserButton = ({
  userId,
  onClose,
}: UnBlockUserButtonProps) => {
  const { handleUnblockUser, isLoading } = useUnblockUser();

  const handleUnblock = async () => {
    await handleUnblockUser(userId);
    onClose();
  };

  return (
    <LoaderButton
      variant="contained"
      onClick={handleUnblock}
      loadingText="Unblocking..."
      disabled={isLoading}
    >
      Unblock User
    </LoaderButton>
  );
};

export default ConfirmUnBlockUserButton;
