import { Box, Typography } from "@mui/material";

export default function UserDetailCloseButton({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <Box sx={{ mt: 2, width: "100%", textAlign: "center" }}>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ cursor: "pointer", mt: 1 }}
        onClick={onClose}
      >
        Close
      </Typography>
    </Box>
  );
}
