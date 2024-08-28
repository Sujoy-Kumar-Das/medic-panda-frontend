"use client";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
interface ICustomModal {
  title?: string;
  open: boolean;
  children: React.ReactNode;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeBtn?: boolean;
  modalWidth?: "sm" | "md" | "lg";
}
export default function CustomModal({
  title,
  open,
  setOpen,
  children,
  closeBtn = true,
  modalWidth = "md",
}: ICustomModal) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={modalWidth}
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          width: {
            xs: "100%",
            md: "80%",
            lg: "60%",
          },
        },
      }}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>{children}</DialogContent>
      {closeBtn && (
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      )}
    </Dialog>
  );
}
