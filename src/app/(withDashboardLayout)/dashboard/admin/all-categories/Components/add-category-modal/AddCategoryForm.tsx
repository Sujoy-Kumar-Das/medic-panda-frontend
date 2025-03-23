import PandaFileUploader from "@/components/form/PandaFileUpload";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import CancelButton from "@/components/ui/buttons/CancelButton";
import useAddCategory from "@/hooks/useAddCategory";
import { createCategorySchema } from "@/schemas/category.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Grid, Stack } from "@mui/material";
import { FieldValues } from "react-hook-form";
export default function AddCategoryForm({ onClose }: { onClose: () => void }) {
  const { handleFunc, isLoading } = useAddCategory(onClose);

  const handleCreateCategory = async (data: FieldValues) => {
    await handleFunc(data);
  };
  return (
    <PandaForm
      onSubmit={handleCreateCategory}
      resolver={zodResolver(createCategorySchema)}
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
        <Grid item xs={12}>
          <PandaInputField
            name="description"
            label="Category Description"
            type="text"
            multiline
            rows={3}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <PandaFileUploader name="thumbnail" label="Thumbnail" />
        </Grid>
      </Grid>

      {/* Action Buttons */}
      <Stack direction="row" spacing={2} justifyContent="flex-end" mt={3}>
        <CancelButton onClose={onClose}>Cancel</CancelButton>
        <LoadingButton
          loading={isLoading}
          disabled={isLoading}
          type="submit"
          sx={{
            borderRadius: 3,
            textTransform: "none",
            fontSize: "14px",
            px: 3,
          }}
        >
          Create Category
        </LoadingButton>
      </Stack>
    </PandaForm>
  );
}
