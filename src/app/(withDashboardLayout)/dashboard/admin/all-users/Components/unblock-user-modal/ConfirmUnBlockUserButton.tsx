import useUnblockUser from "@/hooks/useUnblockUser";
import { LoadingButton } from "@mui/lab";

interface UnBlockUserButtonProps {
  userId: string;
  onClose: () => void;
}

const ConfirmUnBlockUserButton = ({
  userId,
  onClose,
}: UnBlockUserButtonProps) => {
  const { handlerFunc, isLoading } = useUnblockUser(onClose);

  const handleUnblock = async () => await handlerFunc(userId);

  return (
    <LoadingButton
      variant="contained"
      onClick={handleUnblock}
      loadingIndicator="Unblocking..."
      disabled={isLoading}
      loading={isLoading}
    >
      Unblock User
    </LoadingButton>
  );
};

export default ConfirmUnBlockUserButton;
