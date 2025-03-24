import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import CustomModal from "../customModal/CustomModal";

interface FormModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export default function FormModal({
  open,
  onClose,
  children,
  title,
  subtitle,
}: FormModalProps) {
  return (
    <CustomModal open={open} onClose={onClose}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={2}
        borderBottom={"1px solid"}
        borderColor={"divider"}
        mb={2}
      >
        {/* Title & Subtitle */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: { xs: "none", sm: "block" } }}
            mb={2}
          >
            {subtitle}
          </Typography>
        </Box>

        {/* Close Button */}
        <CustomModal.CloseButton onClose={onClose} />
      </Stack>

      {children}
    </CustomModal>
  );
}
