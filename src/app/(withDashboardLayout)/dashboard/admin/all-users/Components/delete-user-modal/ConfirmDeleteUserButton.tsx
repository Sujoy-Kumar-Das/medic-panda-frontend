import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useDeleteUser from "@/hooks/useDeleteUser";

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
    <LoaderButton
      onClick={handleConfirmDeleteUser}
      variant="contained"
      disabled={isLoading}
      loadingText="Deleting..."
      isLoading={isLoading}
    >
      Delete
    </LoaderButton>
  );
};

export default ConfirmDeleteUserButton;
