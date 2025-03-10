import PandaFileUploader from "@/components/form/PandaFileUpload";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import CustomModal from "@/components/modal/customModal/CustomModal";
import useAddCategory from "@/hooks/useAddCategory";
import { createCategorySchema } from "@/schemas/category.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";

interface AddCategoryModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function AddCategoryModal({ open, setOpen }:AddCategoryModalProps) {
  const { handleFunc, isLoading } = useAddCategory();

  const handleCreateCategory = async (data: FieldValues) => {
    await handleFunc(data);
    setOpen(false);
  };

  return (
    <CustomModal open={open} setOpen={setOpen}>
      <Box
        sx={{
          p: 4,
          borderRadius: 4,
          maxWidth: 500,
          mx: "auto",
          border: "2px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          mb={3}
          color="text.primary"
        >
          Add New Category
        </Typography>

        {/* Form */}
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
            <Button
              variant="outlined"
              onClick={() => setOpen(false)}
              sx={{
                borderRadius: 3,
                textTransform: "none",
                fontSize: "14px",
                px: 3,
              }}
            >
              Close
            </Button>
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
      </Box>
    </CustomModal>
  );
}
