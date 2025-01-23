import { useApiResponseHandler } from "@/hooks/useApiResponseHandler";
import { Button } from "@mui/material";
import useDeleteUserApiHook from "./hook/useDeleteUserApi";

interface DeleteUserButtonProps {
  userId: string;
  onClose: () => void;
}

const DeleteUserButton = ({ userId, onClose }: DeleteUserButtonProps) => {
  // handle block the user with the custom hook useBlockUserApiHook

  const { handleDeleteUser, isLoading, isError, isSuccess, error } =
    useDeleteUserApiHook({
      id: userId,
      onClose,
    });

  // handle block the user with the custom hook useApiResponseHandler

  useApiResponseHandler({
    isError,
    isSuccess,
    successMessage: "User Deleted successfully",
    error,
  });

  return (
    <Button
      onClick={handleDeleteUser}
      variant="contained"
      disabled={isLoading}
      sx={{
        backgroundColor: "warning.main",
        color: "white",
        "&:hover": {
          backgroundColor: "warning.dark",
        },
        transition: "background-color 0.3s ease",
      }}
    >
      Delete
    </Button>
  );
};

export default DeleteUserButton;
