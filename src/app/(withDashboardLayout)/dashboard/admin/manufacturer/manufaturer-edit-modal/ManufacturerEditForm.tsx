import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import useEditManufacturer from "@/hooks/useEditManufacturer";
import { createManufacturerValidationSchema } from "@/schemas/manufacture.schema";
import { IManufacturer } from "@/types/Imanufacturer.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

interface ManufacturerEditFormProps {
  onClose: () => void;
  manufacturer: IManufacturer;
}

export default function ManufacturerEditForm({
  onClose,
  manufacturer,
}: ManufacturerEditFormProps) {
  const { handlerFunc, isLoading } = useEditManufacturer(onClose);

  const handleEditManufacturer = async (data: FieldValues) => {
    await handlerFunc(manufacturer._id, data);
  };

  return (
    <>
      {manufacturer && (
        <PandaForm
          onSubmit={handleEditManufacturer}
          resolver={zodResolver(createManufacturerValidationSchema)}
          defaultValues={manufacturer}
        >
          <Grid container spacing={3}>
            {/* Manufacturer Name */}
            <Grid item xs={12}>
              <PandaInputField
                fullWidth
                label="Manufacturer Name"
                name="name"
              />
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
              <PandaInputField
                fullWidth
                label="Contact Number"
                name="contact"
              />
            </Grid>

            {/* Address Fields */}
            <Grid item xs={6}>
              <PandaInputField fullWidth label="State" name="address.state" />
            </Grid>
            <Grid item xs={6}>
              <PandaInputField fullWidth label="City" name="address.city" />
            </Grid>
            <Grid item xs={6}>
              <PandaInputField
                fullWidth
                label="Country"
                name="address.country"
              />
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
              <LoadingButton
                loading={isLoading}
                loadingIndicator="Updating Manufacturer..."
                fullWidth
                type="submit"
                disabled={isLoading}
              >
                Edit Manufacturer
              </LoadingButton>
            </Grid>
          </Grid>
        </PandaForm>
      )}
    </>
  );
}
