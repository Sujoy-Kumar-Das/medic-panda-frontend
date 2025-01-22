import { Button } from "@mui/material";
import { toast } from "sonner";

interface BlockUserCancelButtonProps {
  handleClose: () => void;
}

export default function BlockUserCancelButton({
  handleClose,
}: BlockUserCancelButtonProps) {
  const handleCancelBlockUser = () => {
    toast.error("You Canceled blocking the user.");
    handleClose();
  };
  return (
    <Button
      onClick={handleCancelBlockUser}
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
