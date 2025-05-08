"use client";
import { useDeleteCartMutation } from "@/redux/api";
import { removeCartProduct } from "@/redux/features/cart.slice";
import { useAppDispatch } from "@/redux/hooks";
import { useState } from "react";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";
import { useAuth } from "./useAuth";

export default function useDeleteCart(onClose?: () => void) {
  const [loadingProductId, setLoadingProductId] = useState<string | null>(null);

  //   get user
  const { user } = useAuth();

  const dispatch = useAppDispatch();

  const [deleteCart, apiResponse] = useDeleteCartMutation();

  const handlerFunc = async (id: string) => {
    const userId = user?.id;

    // Set loading state for the specific product
    setLoadingProductId(id);

    if (!user && !userId) {
      dispatch(removeCartProduct({ id }));
      setLoadingProductId(null);
      return;
    }

    await deleteCart(id);

    setLoadingProductId(null);
  };

  useApiMutationResponseHandler({
    successMessage: "Cart Item Deleted Successfully",
    apiResponse,
    onClose: onClose && onClose,
  });

  return { handlerFunc, loadingProductId, ...apiResponse };
}
