import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useAddManufacturer from "@/hooks/useAddManufacturer";
import { createManufacturerValidationSchema } from "@/schemas/manufacture.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

export default function AddManufacturerForm({
  onClose,
}: {
  onClose: () => void;
}) {
  const { handlerFunc, isLoading } = useAddManufacturer();

  const handleCreateManufacturer = async (data: FieldValues) => {
    await handlerFunc(data);
    onClose();
  };

  return (
    <PandaForm
      onSubmit={handleCreateManufacturer}
      resolver={zodResolver(createManufacturerValidationSchema)}
    >
      <Grid container spacing={3}>
        {/* Manufacturer Name */}
        <Grid item xs={12}>
          <PandaInputField fullWidth label="Manufacturer Name" name="name" />
        </Grid>

        {/* Description */}
        <Grid item xs={12}>
          <PandaInputField
            fullWidth
            label="Description"
            name="description"
            multiline
            rows={2}
          />
        </Grid>

        {/* Contact */}
        <Grid item xs={12}>
          <PandaInputField fullWidth label="Contact Number" name="contact" />
        </Grid>

        {/* Address Fields */}
        <Grid item xs={6}>
          <PandaInputField fullWidth label="State" name="address.state" />
        </Grid>
        <Grid item xs={6}>
          <PandaInputField fullWidth label="City" name="address.city" />
        </Grid>
        <Grid item xs={6}>
          <PandaInputField fullWidth label="Country" name="address.country" />
        </Grid>
        <Grid item xs={6}>
          <PandaInputField
            fullWidth
            label="Zip Code"
            name="address.zipCode"
            type="number"
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <LoaderButton
            isLoading={isLoading}
            loadingText="Adding Manufacturer..."
            fullWidth
            type="submit"
          >
            Add Manufacturer
          </LoaderButton>
        </Grid>
      </Grid>
    </PandaForm>
  );
}
