import { useApiResponseHandler } from "@/hooks/useApiResponseHandler";
import { useCreateProductMutation } from "@/redux/api/product.api";
import { imageUploader } from "@/utils/imageUploader";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export default function useCreateProductHook() {
  const [createProduct, { isError, error, isSuccess, isLoading }] =
    useCreateProductMutation();
  const handleCreatedProduct = async (values: FieldValues) => {
    // upload the thumbnail to imgbb
    try {
      const thumbnailURL = await imageUploader(values.product.thumbnail);
      values.product.thumbnail = thumbnailURL;
      await createProduct(values);
    } catch (error) {
      toast.message("Failed to create product.");
    }
  };

  useApiResponseHandler({
    error,
    isError,
    isSuccess,
    successMessage: "Product created.",
  });

  return { handleCreatedProduct, isLoading };
}
