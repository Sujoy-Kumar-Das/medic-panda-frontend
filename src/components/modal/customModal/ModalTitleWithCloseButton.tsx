import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Stack, SxProps } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";

interface ModalTitleWithCloseButtonProps {
  children: string;
  sx?: SxProps;
  titleSx?: SxProps;
  buttonSx?: SxProps;
  handler?: () => void;
  onClose: () => void;
}

const ModalTitleWithCloseButton = ({
  children,
  sx,
  titleSx,
  buttonSx,
  handler,
  onClose,
}: ModalTitleWithCloseButtonProps) => {
  const handleCloseModal = () => {
    onClose();
    handler && handler();
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ ...sx }}
    >
      <DialogTitle sx={{ px: 0, ...titleSx }}>{children}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleCloseModal}
        sx={{ p: 1, ...buttonSx }}
      >
        <CloseIcon />
      </IconButton>
    </Stack>
  );
};

export default ModalTitleWithCloseButton;
