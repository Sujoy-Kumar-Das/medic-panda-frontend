import useBlockUser from "@/hooks/useBlockUser";
import { LoadingButton } from "@mui/lab";

interface BlockUserButtonProps {
  userId: string;
  onClose: () => void;
}

const ConfirmBlockUserButton = ({ userId, onClose }: BlockUserButtonProps) => {
  const { handleFunc, isLoading } = useBlockUser(onClose);

  const handleBlockUser = async () => await handleFunc(userId);

  return (
    <LoadingButton
      loadingIndicator="Blocking..."
      loading={isLoading}
      disabled={isLoading}
      onClick={handleBlockUser}
    >
      Block User
    </LoadingButton>
  );
};

export default ConfirmBlockUserButton;
