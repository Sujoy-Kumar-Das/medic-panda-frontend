import { useApiMutationResponseHandler } from "@/hooks/useApiMutationResponseHandler";
import { useDeleteProductMutation } from "@/redux/api/product.api";

export default function useDeleteProduct(onClose: () => void) {
  const [deleteProduct, apiResponse] = useDeleteProductMutation();

  const handlerFunc = async (id: string) => {
    await deleteProduct(id);
  };

  useApiMutationResponseHandler({
    apiResponse,
    successMessage: "Product Deleted Successfully",
    onClose,
  });

  return { handlerFunc, ...apiResponse };
}
