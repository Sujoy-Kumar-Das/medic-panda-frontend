import { useApiResponseHandler } from "@/hooks/useApiResponseHandler";
import { Button } from "@mui/material";
import useUnblockUserApiHook from "./hook/useUnblockUserApiHook";

interface UnBlockUserButtonProps {
  userId: string;
  onClose: () => void;
}

const UnBlockUserButton = ({ userId, onClose }: UnBlockUserButtonProps) => {
  // handle unblock the user with the custom hook useBlockUserApiHook

  const { handleUnblockUser, isLoading, isError, error, isSuccess } =
    useUnblockUserApiHook({ id: userId, onClose });

  // handle unblock the user with the custom hook useApiResponseHandler

  useApiResponseHandler({
    isError,
    isSuccess,
    successMessage: "User unblocked successfully",
    error,
  });
  return (
    <Button
      variant="contained"
      onClick={handleUnblockUser}
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
      {isLoading ? "Unblocking..." : "Unblock User"}
    </Button>
  );
};

export default UnBlockUserButton;
