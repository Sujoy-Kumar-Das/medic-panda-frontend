import { useApiMutationResponseHandler } from "@/hooks/useApiMutationResponseHandler";
import { useEditProductMutation } from "@/redux/api/product.api";
import { FieldValues } from "react-hook-form";

export default function useEditProduct() {
  const [editProduct, apiResponse] = useEditProductMutation();

  const handleUpdateProductData = async (id: string, values: FieldValues) => {
    await editProduct({ id, values });
  };

  useApiMutationResponseHandler({
    apiResponse,
    successMessage: "Product Updated Successfully.",
  });

  return { handleUpdateProductData, isLoading: apiResponse.isLoading };
}
