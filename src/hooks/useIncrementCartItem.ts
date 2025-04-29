"use client";
import { useIncrementCartItemMutation } from "@/redux/api";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useIncrementCartItem() {
  const [incrementQuantity, apiResponse] = useIncrementCartItemMutation();

  const handlerFunc = async (id: string) => {
    await incrementQuantity({ id });
  };

  useApiMutationResponseHandler({
    successMessage: "Cart Item Quantity Incremented",
    apiResponse,
  });

  return { handlerFunc, ...apiResponse };
}
