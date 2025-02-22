import { useApiMutationResponseHandler } from "@/hooks/useApiMutationResponseHandler";
import { useCreateProductMutation } from "@/redux/api/product.api";
import { imageUploader } from "@/utils/imageUploader";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export default function useCreateProductHook() {
  // handle the loading state for the image upload;
  const [loading, setLoading] = useState(false);
  const [createProduct, apiResponse] = useCreateProductMutation();

  const handleCreatedProduct = async (
    values: FieldValues,
    onClose: () => void
  ) => {
    setLoading(true);
    // upload the thumbnail to imgbb
    try {
      const thumbnailURL = await imageUploader(values.product.thumbnail);
      values.product.thumbnail = thumbnailURL;
      await createProduct(values);
      onClose();
      setLoading(false);
    } catch (error) {
      onClose();
      setLoading(false);
      toast.message("Failed to create product.");
    }
  };

  useApiMutationResponseHandler({
    apiResponse,
    successMessage: "Product created successfully.",
  });

  return { handleCreatedProduct, isLoading: apiResponse.isLoading || loading };
}
