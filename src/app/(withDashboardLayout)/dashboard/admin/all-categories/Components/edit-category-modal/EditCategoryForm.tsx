import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import CancelButton from "@/components/ui/buttons/CancelButton";
import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useEditCategory from "@/hooks/useEditCategory";
import { ICategory } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

interface EditCategoryFormProps {
  onClose: () => void;
  category: ICategory;
}

const validateCategorySchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(10, { message: "Name Should be minimum 5 characters" }),
});

export default function EditCategoryForm({
  onClose,
  category,
}: EditCategoryFormProps) {
  const { handlerFunc, isLoading } = useEditCategory(onClose);

  const handleEditCategory = async (data: FieldValues) => {
    await handlerFunc(category._id, data);
  };

  //   default value
  const defaultValue = { name: category?.name };
  return (
    <PandaForm
      onSubmit={handleEditCategory}
      defaultValues={defaultValue}
      resolver={zodResolver(validateCategorySchema)}
    >
      <PandaInputField name="name" fullWidth label="Category Name" />
      {/* Action Buttons */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="flex-end"
        alignItems={"center"}
        mt={3}
      >
        <CancelButton onClose={onClose}>Cancel</CancelButton>
        <LoaderButton
          loadingText="Updating..."
          type="submit"
          isLoading={isLoading}
        >
          Update
        </LoaderButton>
      </Stack>
    </PandaForm>
  );
}
