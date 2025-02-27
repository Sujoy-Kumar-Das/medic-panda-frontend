import useModal from "@/hooks/useModal";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Stack } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";

const ModalTitleWithCloseButton = ({ children }: { children: string }) => {
  const { closeModal } = useModal();

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ p: 2 }}
    >
      <DialogTitle>{children}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={closeModal}
        sx={{ color: (theme) => theme.palette.grey[500] }}
      >
        <CloseIcon />
      </IconButton>
    </Stack>
  );
};

export default ModalTitleWithCloseButton;
