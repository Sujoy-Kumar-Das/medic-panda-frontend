import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { ReactNode } from "react";

const ModalCloseButton = ({
  children,
  onClose,
}: {
  children?: ReactNode;
  onClose: () => void;
}) => {
  return (
    <IconButton onClick={onClose} aria-label="close">
      {children || <CloseIcon />}
    </IconButton>
  );
};

export default ModalCloseButton;
