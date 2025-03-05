import { useApiMutationResponseHandler } from "@/hooks/useApiMutationResponseHandler";
import { useDeleteProductMutation } from "@/redux/api/product.api";

export default function useDeleteProduct() {
  const [deleteProduct, apiResponse] = useDeleteProductMutation();

  const handleDeleteProduct = async (id: string) => {
    await deleteProduct(id);
  };

  useApiMutationResponseHandler({
    apiResponse,
    successMessage: "Product Deleted Successfully",
  });

  return { handleDeleteProduct, ...apiResponse };
}
