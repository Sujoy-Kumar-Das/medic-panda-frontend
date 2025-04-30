"use client";
import { useDeleteCartMutation } from "@/redux/api";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useDeleteCart(onClose?: () => void) {
  const [deleteCart, apiResponse] = useDeleteCartMutation();

  const handlerFunc = async (id: string) => {
    await deleteCart(id);
  };

  useApiMutationResponseHandler({
    successMessage: "Cart Item Deleted Successfully",
    apiResponse,
    onClose: onClose && onClose,
  });

  return { handlerFunc, ...apiResponse };
}
