import { useApiResponseHandler } from "@/hooks/useApiMutationResponseHandler";
import { Button } from "@mui/material";
import useBlockUserApiHook from "../hook/useBlockUserApiHook";

interface BlockUserButtonProps {
  userId: string;
  onClose: () => void;
}

const ConfirmBlockUserButton = ({ userId, onClose }: BlockUserButtonProps) => {
  // handle block the user with the custom hook useBlockUserApiHook

  const { handleBlockUser, isLoading, isError, isSuccess, error } =
    useBlockUserApiHook({
      id: userId,
      onClose,
    });

  // handle block the user with the custom hook useApiResponseHandler

  useApiResponseHandler({
    isError,
    isSuccess,
    successMessage: "User blocked successfully",
    error,
  });

  return (
    <Button
      onClick={handleBlockUser}
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
      {isLoading ? "Blocking..." : "Block User"}
    </Button>
  );
};

export default ConfirmBlockUserButton;
