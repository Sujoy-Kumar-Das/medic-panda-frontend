import { Button } from "@mui/material";
import { toast } from "sonner";

interface UnBlockUserCancelButtonProps {
  onClose: () => void;
}

export default function UnBlockUserCancelButton({
  onClose,
}: UnBlockUserCancelButtonProps) {
  const handleCancelBlockUser = () => {
    toast.error("Unblock action canceled.");
    onClose();
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
