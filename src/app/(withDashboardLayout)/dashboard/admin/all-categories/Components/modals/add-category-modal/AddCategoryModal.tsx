"use client";
import FormModal from "@/components/modal/FormModal/FormModal";
import useAddCategory from "@/hooks/useAddCategory";
import { createCategorySchema } from "@/schemas/category.schema";
import CategoryForm from "../../form/CategoryForm";

interface AddCategoryModalProps {
  onClose: () => void;
}

export default function AddCategoryModal({ onClose }: AddCategoryModalProps) {
  const { handleFunc, isLoading } = useAddCategory(onClose);
  return (
    <FormModal
      title=" Add Medicine Category"
      subtitle=" Create a new category to organize medicines effectively."
      open
      onClose={onClose}
    >
      <CategoryForm
        onClose={onClose}
        onSubmit={handleFunc}
        defaultValues={{ name: "", thumbnail: "" }}
        isLoading={isLoading}
        type="create"
        validationSchema={createCategorySchema}
      />
    </FormModal>
  );
}
