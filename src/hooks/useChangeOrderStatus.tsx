import { useChangeOrderStatusMutation } from "@/redux/api/order.api";
import { FieldValues } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useChangeOrderStatus() {
  const [changeStatus, apiResponse] = useChangeOrderStatusMutation();

  const handleChangeOrderStatus = async (id: string, data: FieldValues) => {
    await changeStatus({ id, data });
  };

  useApiMutationResponseHandler({
    apiResponse,
    successMessage: "Order Changed successfully.",
  });

  return { handleChangeOrderStatus, isLoading: apiResponse.isLoading };
}
