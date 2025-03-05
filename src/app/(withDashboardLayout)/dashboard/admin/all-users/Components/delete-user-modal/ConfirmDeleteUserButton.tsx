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
  const { deleteUserHandler, isLoading } = useDeleteUser();

  // Renamed the function to avoid conflict
  const handleConfirmDeleteUser = async () => {
    await deleteUserHandler(userId, onClose);
  };

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
