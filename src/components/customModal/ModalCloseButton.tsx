import useModal from "@/hooks/useModal";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { ReactNode } from "react";

const ModalCloseButton = ({ children }: { children?: ReactNode }) => {
  const { closeModal } = useModal();

  return (
    <IconButton
      onClick={closeModal}
      aria-label="close"
      sx={{
        position: "absolute",
        right: 8,
        top: 8,
        color: (theme) => theme.palette.grey[500],
      }}
    >
      {children || <CloseIcon />}
    </IconButton>
  );
};

export default ModalCloseButton;
