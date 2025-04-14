import { useCancelOrderMutation } from "@/redux/api/order.api";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useCancelOrder() {
  const [cancelOrder, apiResponse] = useCancelOrderMutation();

  // Handle Cancel Order Action
  const handlerFunc = async (id: string) => {
    await cancelOrder(id);
  };

  // Manage order cancellation feedback
  useApiMutationResponseHandler({
    successMessage: "Order canceled successfully.",
    apiResponse,
  });

  return { handlerFunc, ...apiResponse };
}
