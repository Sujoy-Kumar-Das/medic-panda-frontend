import useDeleteUser from "@/hooks/useDeleteUser";
import { LoadingButton } from "@mui/lab";

interface DeleteUserButtonProps {
  userId: string;
  onClose: () => void;
}

const ConfirmDeleteUserButton = ({
  userId,
  onClose,
}: DeleteUserButtonProps) => {
  const { handlerFunc, isLoading } = useDeleteUser(onClose);

  const handleConfirmDeleteUser = async () => await handlerFunc(userId);

  return (
    <LoadingButton
      onClick={handleConfirmDeleteUser}
      variant="contained"
      disabled={isLoading}
      loadingIndicator="Deleting..."
      loading={isLoading}
    >
      Delete
    </LoadingButton>
  );
};

export default ConfirmDeleteUserButton;
