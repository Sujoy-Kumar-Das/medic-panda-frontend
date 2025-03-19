import { useCreateManufactureMutation } from "@/redux/api/manufacture.api";
import { FieldValues } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useAddManufacturer() {
  const [addManufacturer, apiResponse] = useCreateManufactureMutation();

  const handlerFunc = async (data: FieldValues) => {
    await addManufacturer(data);
  };

  useApiMutationResponseHandler({
    successMessage: "Manufacturer Created Successfully",
    apiResponse,
  });

  return { handlerFunc, isLoading: apiResponse.isLoading };
}
