import { useApiMutationResponseHandler } from "@/hooks/useApiMutationResponseHandler";
import { useCreateProductMutation } from "@/redux/api/product.api";
import { imageUploader } from "@/utils/imageUploader";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export default function useCreateProductHook() {
  const [createProduct, apiResponse] = useCreateProductMutation();

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

  useApiMutationResponseHandler({
    apiResponse,
    successMessage: "Product created.",
  });

  return { handleCreatedProduct, isLoading: apiResponse.isLoading };
}
