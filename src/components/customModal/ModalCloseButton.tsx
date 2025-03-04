import CloseIcon from "@mui/icons-material/Close";
import { IconButton, SxProps } from "@mui/material";
import { ReactNode } from "react";

const ModalCloseButton = ({
  children,
  onClose,
  sxProps,
}: {
  children?: ReactNode;
  onClose: () => void;
  sxProps?: SxProps;
}) => {
  return (
    <IconButton onClick={onClose} aria-label="close" sx={{ ...sxProps }}>
      {children || <CloseIcon />}
    </IconButton>
  );
};

export default ModalCloseButton;
