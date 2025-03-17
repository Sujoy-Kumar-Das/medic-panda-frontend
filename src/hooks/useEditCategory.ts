import { useEditCategoryMutation } from "@/redux/api/category.api";
import { FieldValues } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useEditCategory() {
  const [edit, apiResponse] = useEditCategoryMutation();

  const handlerFunc = async (id: string, data: FieldValues) => {
    await edit({ id, data });
  };

  useApiMutationResponseHandler({
    successMessage: "Category Updated successfully",
    apiResponse,
  });

  return { handlerFunc, isLoading: apiResponse.isLoading };
}
