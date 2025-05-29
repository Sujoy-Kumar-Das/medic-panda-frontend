import { Box, Stack, SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";
import CustomModal from "../customModal/CustomModal";

interface WaringModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

interface WaringModalChieldsProps {
  children: ReactNode;
  sx?: SxProps;
}

export default function WaringModal({
  open,
  onClose,
  children,
}: WaringModalProps) {
  return (
    <CustomModal open={open} onClose={onClose}>
      <Box sx={{ p: 4, maxWidth: 500, width: "100%", mx: "auto" }}>
        {children}
      </Box>
    </CustomModal>
  );
}

const WarningModalTitle = ({ children, sx }: WaringModalChieldsProps) => {
  return (
    <Typography variant="h6" align="center" sx={{ mb: 2, ...sx }}>
      {children}
    </Typography>
  );
};

const WarningModalMessage = ({ children, sx }: WaringModalChieldsProps) => {
  return (
    <Stack spacing={2} sx={{ mb: 3 }}>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ ...sx }}
      >
        {children}
      </Typography>
    </Stack>
  );
};

const WaringModalContent = ({ children, sx }: WaringModalChieldsProps) => {
  return (
    <Stack direction="row" spacing={2} justifyContent="center" sx={{ ...sx }}>
      {children}
    </Stack>
  );
};

WaringModal.Title = WarningModalTitle;
WaringModal.Message = WarningModalMessage;
WaringModal.Content = WaringModalContent;
