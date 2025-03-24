import FormModal from "@/components/modal/FormModal/FormModal";
import { IManufacturer } from "@/types/Imanufacturer.type";
import { Grid, Typography } from "@mui/material";

interface ManufacturerDetailsModalProps {
  open: boolean;
  onModalClose: () => void;
  onClose: () => void;
  manufacturer: IManufacturer;
}

export default function ManufacturerDetailsModal({
  open,
  onModalClose,
  onClose,
  manufacturer,
}: ManufacturerDetailsModalProps) {
  const handleCloseModal = () => {
    onModalClose();
    onClose();
  };

  return (
    <FormModal
      open={open}
      onClose={handleCloseModal}
      title="Manufacturer Profile"
      subtitle="Overview of the manufacturer’s details and associated products"
    >
      {/* Manufacturer Info */}
      <Grid container spacing={2} height={"100%"}>
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
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              maxWidth: "100%",
              overflow: "hidden",
            }}
          >
            {manufacturer?.description || "No additional details available"}
          </Typography>
        </Grid>
      </Grid>
    </FormModal>
  );
}
