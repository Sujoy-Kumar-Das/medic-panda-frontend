"use client";
import { useDeleteManufactureMutation } from "@/redux/api";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useDeleteManufacturer(onClose: () => void) {
  const [deleteManufacturer, apiResponse] = useDeleteManufactureMutation();

  const handlerFunc = async (id: string) => {
    await deleteManufacturer(id);
  };

  useApiMutationResponseHandler({
    successMessage: "Manufacturer Deleted Successfully",
    apiResponse,
    onClose,
  });

  return { handlerFunc, isLoading: apiResponse.isLoading };
}
