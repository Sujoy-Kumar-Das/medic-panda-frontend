import { useRemoveCartItemMutation } from "@/redux/api";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useDecrementCartItem() {
  const [decrementQuantity, apiResponse] = useRemoveCartItemMutation();

  const handlerFunc = async (id: string) => {
    await decrementQuantity({
      id,
    });
  };

  useApiMutationResponseHandler({
    successMessage: "Cart Item Quantity Decrement Successfully",
    apiResponse,
  });

  return { handlerFunc, ...apiResponse };
}
