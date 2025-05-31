import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import LoaderButton from "@/components/ui/buttons/LoaderButton";
import { IAddAndEditFormProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid } from "@mui/material";
export default function ManufacturerForm({
  defaultValues,
  isLoading,
  onClose,
  onSubmit,
  type,
  validationSchema,
}: IAddAndEditFormProps) {
  return (
    <PandaForm
      onSubmit={onSubmit}
      resolver={zodResolver(validationSchema)}
      defaultValues={defaultValues}
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
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
        >
          <Button color="warning" onClick={onClose}>
            Close
          </Button>
          <LoaderButton isLoading={isLoading} type="submit">
            {type === "create" ? "Create" : "Edit"} Manufacturer
          </LoaderButton>
        </Grid>
      </Grid>
    </PandaForm>
  );
}
