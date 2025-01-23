import { Button } from "@mui/material";
import { toast } from "sonner";

interface DeleteUserCancelButtonProps {
  onClose: () => void;
}

export default function DeleteUserCancelButton({
  onClose,
}: DeleteUserCancelButtonProps) {
  const handleCancelDeleteUser = () => {
    toast.error("You Canceled Deleting the user.");
    onClose();
  };
  return (
    <Button
      onClick={handleCancelDeleteUser}
      variant="outlined"
      sx={{
        color: "warning.main",
        borderColor: "warning.main",
        "&:hover": {
          backgroundColor: "#FFECB3",
        },
      }}
    >
      Cancel
    </Button>
  );
}
