import FormModal from "@/components/modal/FormModal/FormModal";
import useEditCategory from "@/hooks/useEditCategory";
import { ICategory } from "@/types";
import { z } from "zod";
import CategoryForm from "../form/CategoryForm";

interface EditCategoryModalProps {
  onClose: () => void;
  category: ICategory;
}

const validationSchema = z.object({
  name: z
    .string({ required_error: "Category name is required." })
    .min(3, { message: "Category name is required." }),
});

export default function EditCategoryModal({
  onClose,
  category,
}: EditCategoryModalProps) {
  const { handlerFunc, isLoading } = useEditCategory(onClose);

  return (
    <FormModal
      title="Edit Category"
      subtitle="Modify category details to ensure accurate classification of medicines"
      open
      onClose={onClose}
    >
      <CategoryForm
        onSubmit={(data) => handlerFunc(category._id, data)}
        onClose={onClose}
        defaultValues={category}
        isLoading={isLoading}
        type="edit"
        validationSchema={validationSchema}
      />
    </FormModal>
  );
}
