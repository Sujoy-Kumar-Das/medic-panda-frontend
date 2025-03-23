import { useDeleteCategoryMutation } from "@/redux/api/category.api";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useDeleteCategory(onClose: () => void) {
  const [deleteCategory, apiResponse] = useDeleteCategoryMutation();

  const handlerFunc = async (id: string) => {
    await deleteCategory(id);
  };

  useApiMutationResponseHandler({
    successMessage: "Category deleted successfully",
    apiResponse,
    onClose,
  });

  return { handlerFunc, isLoading: apiResponse.isLoading };
}
