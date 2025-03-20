import { useEditManufactureMutation } from "@/redux/api/manufacture.api";
import { FieldValues } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useEditManufacturer(onClose: () => void) {
  const [edit, apiResponse] = useEditManufactureMutation();

  const handlerFunc = async (id: string, data: FieldValues) => {
    await edit({ id, data });
  };

  useApiMutationResponseHandler({
    successMessage: "Manufacturer Updated Successfully",
    apiResponse,
    onClose,
  });

  return { handlerFunc, isLoading: apiResponse.isLoading };
}
