import PandaFileUploader from "@/components/form/PandaFileUpload";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { IAddAndEditFormProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Button, Grid, Stack } from "@mui/material";
export default function CategoryForm({
  onSubmit,
  validationSchema,
  onClose,
  defaultValues,
  isLoading,
  type,
}: IAddAndEditFormProps) {
  return (
    <PandaForm
      onSubmit={onSubmit}
      resolver={zodResolver(validationSchema)}
      defaultValues={defaultValues}
    >
      {/* Input Fields */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PandaInputField
            name="name"
            type="text"
            label="Category Name"
            fullWidth
          />
        </Grid>

        {type === "create" && (
          <Grid item xs={12}>
            <PandaFileUploader name="thumbnail" label="Thumbnail" />
          </Grid>
        )}
      </Grid>

      {/* Action Buttons */}
      <Stack direction="row" spacing={2} justifyContent="flex-end" mt={3}>
        <Button color="warning" onClick={onClose}>
          Close
        </Button>
        <LoadingButton loading={isLoading} disabled={isLoading} type="submit">
          {type === "create" ? "Create" : "Edit"} Category
        </LoadingButton>
      </Stack>
    </PandaForm>
  );
}
