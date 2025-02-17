import CancelIcon from "@mui/icons-material/Cancel";
import { Box, IconButton, Stack, Typography } from "@mui/material";

export default function AddProductModalHeader({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      borderBottom={"1px solid"}
      borderColor={"divider"}
    >
      {/* Title & Subtitle */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
          gutterBottom
        >
          Add New Product
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: { xs: "none", sm: "block" } }}
          mb={2}
        >
          Fill out the details below to add a new product.
        </Typography>
      </Box>

      {/* Close Button */}
      <IconButton onClick={onClose} size="large" aria-label="close">
        <CancelIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  );
}
