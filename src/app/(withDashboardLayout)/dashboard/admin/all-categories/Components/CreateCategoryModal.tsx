"use client";
import CustomModal from "@/components/customModal/CustomModal";
import PandaFileUploader from "@/components/form/PandaFileUpload";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { useCreateCategoryMutation } from "@/redux/api/category.api";
import { createCategorySchema } from "@/schemas/category.schema";
import { imageUploader } from "@/utils/imageUploader";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Box, Container, Grid, Stack } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

interface ICreateCategoryModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CreateCategoryModal({
  open,
  setOpen,
}: ICreateCategoryModalProps) {
  const [createCategory, { isLoading }] = useCreateCategoryMutation();
  const handleCreateCategory = async (data: FieldValues) => {
    try {
      data.thumbnail = await imageUploader(data.thumbnail);
      const res = await createCategory(data).unwrap();
      if (res._id) {
        toast.success("Category created successfully.");
        setOpen((prev) => !prev);
      } else {
        toast.error("Something went wrong.Try again later.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.Try again later.");
    }
  };
  return (
    <CustomModal open={open} setOpen={setOpen} closeBtn={false}>
      <Container>
        <Box sx={{ py: 2 }}>
          <PandaForm
            onSubmit={handleCreateCategory}
            resolver={zodResolver(createCategorySchema)}
          >
            <Stack direction={"column"} spacing={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <PandaInputField
                    name="name"
                    type="text"
                    label="Name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <PandaInputField
                    name="description"
                    label="Description"
                    type="text"
                    multiline={true}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <PandaFileUploader name="thumbnail" label="Thumbnail" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LoadingButton
                    loading={isLoading}
                    disabled={isLoading}
                    fullWidth
                    color="primary"
                    size="small"
                    type="submit"
                  >
                    Create
                  </LoadingButton>{" "}
                </Grid>
              </Grid>
            </Stack>
          </PandaForm>
        </Box>
      </Container>
    </CustomModal>
  );
}
