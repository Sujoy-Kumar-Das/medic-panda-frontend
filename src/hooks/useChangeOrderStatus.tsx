import { useChangeOrderStatusMutation } from "@/redux/api/order.api";
import { FieldValues } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useChangeOrderStatus(onClose: () => void) {
  const [changeStatus, apiResponse] = useChangeOrderStatusMutation();

  const handlerFunc = async (id: string, data: FieldValues) => {
    await changeStatus({ id, data });
  };

  useApiMutationResponseHandler({
    apiResponse,
    successMessage: "Order Changed successfully.",
    onClose,
  });

  return { handlerFunc, ...apiResponse };
}
