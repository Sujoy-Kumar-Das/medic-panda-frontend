import { useDeleteCategoryMutation } from "@/redux/api/category.api";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useDeleteCategory() {
  const [deleteCategory, apiResponse] = useDeleteCategoryMutation();

  const handlerFunc = async (id: string) => {
    await deleteCategory(id);
  };

  useApiMutationResponseHandler({
    successMessage: "Category deleted successfully",
    apiResponse,
  });

  return { handlerFunc, isLoading: apiResponse.isLoading };
}
