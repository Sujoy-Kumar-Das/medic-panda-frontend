import { Button, SxProps } from "@mui/material";
import { toast } from "sonner";

interface CancelButtonProps {
  onClose: () => void;
  label?: string;
  cancelMessage?: string;
  fullWidth?: boolean;
  sxProps: SxProps;
}

export default function CancelButton({
  onClose,
  label = "Cancel",
  cancelMessage = "Action canceled successfully!",
  fullWidth = false,
  sxProps,
}: CancelButtonProps) {
  const handleCancel = () => {
    toast.success(cancelMessage);
    onClose();
  };

  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={handleCancel}
      sx={{ width: fullWidth ? "100%" : 120, ...sxProps }}
    >
      {label}
    </Button>
  );
}
