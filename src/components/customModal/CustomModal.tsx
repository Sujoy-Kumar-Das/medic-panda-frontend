"use client";
import { SxProps, Theme } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import React, { ReactNode } from "react";
import ModalCloseButton from "./ModalCloseButton";
import ModalTitle from "./ModalTitle";
import ModalTitleWithCloseButton from "./ModalTitleWithCloseButton";

interface ICustomModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  modalWidth?: "sm" | "md" | "lg";
  sxProps?: SxProps<Theme>;
}

function CustomModal({
  open,
  setOpen,
  children,
  modalWidth = "md",
  sxProps,
}: ICustomModal) {
  const handleClose = () => setOpen(false);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={modalWidth}
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          width: { xs: "100%", md: "80%", lg: "60%" },
          padding: 4,
          margin: 0,
        },
        ...(sxProps || {}),
      }}
    >
      {children}
    </Dialog>
  );
}

CustomModal.Title = ModalTitle;
CustomModal.TitleWithCloseButton = ModalTitleWithCloseButton;
CustomModal.CloseButton = ModalCloseButton;

export default CustomModal;
