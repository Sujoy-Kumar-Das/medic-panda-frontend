import { useApiMutationResponseHandler } from "@/hooks/useApiMutationResponseHandler";
import { useEditProductMutation } from "@/redux/api/product.api";
import { FieldValues } from "react-hook-form";

export default function useEditProduct(onClose: () => void) {
  const [editProduct, apiResponse] = useEditProductMutation();

  const handlerFunc = async (id: string, data: FieldValues) => {
    await editProduct({ id, data });
  };

  useApiMutationResponseHandler({
    apiResponse,
    successMessage: "Product Updated Successfully.",
    onClose,
  });

  return { handlerFunc, ...apiResponse };
}
