import { Button, SxProps } from "@mui/material";
import { toast } from "sonner";

interface CancelButtonProps {
  onClose: () => void;
  children?: string;
  cancelMessage?: string;
  fullWidth?: boolean;
  sxProps?: SxProps;
}

export default function CancelButton({
  onClose,
  children = "Cancel",
  cancelMessage = "Action canceled successfully!",
  fullWidth = false,
  sxProps = {},
}: CancelButtonProps) {
  const handleCancel = () => {
    toast.success(cancelMessage);
    onClose();
  };

  return (
    <Button
      variant="outlined"
      color="warning"
      onClick={handleCancel}
      sx={{
        width: fullWidth ? "100%" : "auto",
        whiteSpace: "nowrap",
        ...sxProps,
      }}
    >
      {children}
    </Button>
  );
}
