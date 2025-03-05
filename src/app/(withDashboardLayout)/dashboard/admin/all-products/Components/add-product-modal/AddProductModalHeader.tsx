import CustomModal from "@/components/modal/customModal/CustomModal";
import { Box, Stack, Typography } from "@mui/material";

export default function AddProductModalHeader({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
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
      <CustomModal.CloseButton onClose={onClose} />
    </Stack>
  );
}
