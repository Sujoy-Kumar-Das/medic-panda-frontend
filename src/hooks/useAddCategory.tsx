import { useCreateCategoryMutation } from "@/redux/api/category.api";
import { imageUploader } from "@/utils/imageUploader";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export default function useAddCategory() {
  const [createCategory, { isLoading: creatingCategory, ...apiResponse }] =
    useCreateCategoryMutation();
  const [uploading, setUploading] = useState(false);

  const handleFunc = async (data: FieldValues) => {
    try {
      setUploading(true);
      const uploadedImage = await imageUploader(data.thumbnail);

      if (!uploadedImage) {
        toast.error("Image upload failed.");
        return;
      }

      const res = await createCategory({
        ...data,
        thumbnail: uploadedImage,
      }).unwrap();

      if (res?._id) {
        toast.success("Category created successfully.");
      } else {
        toast.error("Failed to create category.");
      }
    } catch (error) {
      toast.error("An error occurred while creating the category.");
    } finally {
      setUploading(false);
    }
  };

  return {
    handleFunc,
    isLoading: uploading || creatingCategory,
    ...apiResponse,
  };
}
