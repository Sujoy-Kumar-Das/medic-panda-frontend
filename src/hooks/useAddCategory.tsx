import { useCreateCategoryMutation } from "@/redux/api/category.api";
import { imageUploader } from "@/utils/imageUploader";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useAddCategory(onClose: () => void) {
  const [createCategory, apiResponse] = useCreateCategoryMutation();
  const [uploading, setUploading] = useState(false);

  const handleFunc = async (data: FieldValues) => {
    try {
      setUploading(true);
      const uploadedImage = await imageUploader(data.thumbnail);

      if (!uploadedImage) {
        toast.error("Image upload failed.");
        return;
      }

      await createCategory({
        ...data,
        thumbnail: uploadedImage,
      }).unwrap();
    } catch (error) {
      toast.error("An error occurred while creating the category.");
    } finally {
      setUploading(false);
    }
  };

  useApiMutationResponseHandler({
    successMessage: "Category created successfully.",
    apiResponse,
    onClose,
  });

  apiResponse.isLoading = uploading || apiResponse.isLoading;

  return {
    handleFunc,
    ...apiResponse,
  };
}
