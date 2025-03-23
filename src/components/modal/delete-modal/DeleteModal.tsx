import { Box, Divider, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import CustomModal from "../customModal/CustomModal";

interface DeleteModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  children: ReactNode;
}

export default function DeleteModal({
  open,
  onClose,
  title = "Are you sure?",
  message = "This action is permanent and cannot be undone.",
  children,
}: DeleteModalProps) {
  return (
    <CustomModal open={open} onClose={onClose}>
      <Box sx={{ p: 4, maxWidth: 500, width: "100%", mx: "auto" }}>
        {/* Modal Title */}
        <Typography variant="h6" align="center" sx={{ mb: 2 }}>
          {title}
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Modal Content */}
        <Stack spacing={2} sx={{ mb: 3 }}>
          <Typography variant="body2" color="text.secondary" align="center">
            {message}
          </Typography>
        </Stack>

        {/* Action Buttons Component */}
        <Stack direction="row" spacing={2} justifyContent="center">
          {children}
        </Stack>
      </Box>
    </CustomModal>
  );
}
