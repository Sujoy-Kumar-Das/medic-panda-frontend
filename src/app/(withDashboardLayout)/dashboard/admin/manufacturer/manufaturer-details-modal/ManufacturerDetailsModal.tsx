import CustomModal from "@/components/modal/customModal/CustomModal";
import { IManufacturer } from "@/types/Imanufacturer.type";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface ManufacturerDetailsModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
  manufacturer: IManufacturer;
}

export default function ManufacturerDetailsModal({
  open,
  setOpen,
  onClose,
  manufacturer,
}: ManufacturerDetailsModalProps) {
  const handleCloseModal = () => {
    setOpen((prev) => !prev);
    onClose();
  };

  return (
    <CustomModal open={open} setOpen={setOpen}>
      <Box
        sx={{
          padding: 4,
          textAlign: "center",
          maxWidth: 500,
          mx: "auto",
        }}
      >
        {/* Header with Title and Close Button */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Manufacturer Details
          </Typography>

          <IconButton onClick={handleCloseModal}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Divider */}
        <Divider sx={{ marginBottom: 2 }} />

        {/* Manufacturer Info */}
        <Grid container spacing={2} textAlign="left">
          <Grid item xs={12}>
            <Typography variant="subtitle1" fontWeight="bold">
              Name:
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {manufacturer?.name || "N/A"}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" fontWeight="bold">
              Address:
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {manufacturer?.address?.city}-{manufacturer?.address?.zipCode}{" "}
              {manufacturer?.address?.state}
              {manufacturer?.address?.country}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" fontWeight="bold">
              Contact Number:
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {manufacturer?.contact || "No contact info"}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" fontWeight="bold">
              Description:
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {manufacturer?.description || "No additional details available"}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </CustomModal>
  );
}
