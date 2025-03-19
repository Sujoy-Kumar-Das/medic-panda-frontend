import CustomModal from "@/components/modal/customModal/CustomModal";
import { Box, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import AddManufacturerForm from "./AddManufacturerForm";

interface AddManufacturerModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function AddManufacturerModal({
  open,
  setOpen,
}: AddManufacturerModalProps) {
  const handleCloseModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <CustomModal open={open} setOpen={setOpen}>
      <Box
        sx={{
          p: 4,
          bgcolor: "background.default",
          borderRadius: 2,
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Add Manufacturer
        </Typography>
        <CustomModal.CloseButton onClose={handleCloseModal} />
      </Box>

      <AddManufacturerForm onClose={handleCloseModal} />
    </CustomModal>
  );
}
