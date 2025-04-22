"use client";

import { decreaseQuantity } from "@/redux/features/cart.slice";
import { useAppDispatch } from "@/redux/hooks";
import { useState } from "react";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";
import { useAuth } from "./useAuth";
import { useRemoveCartItemMutation } from "@/redux/api/cart/cart.api";

export default function useRemoveCartItem(onClose: () => void) {
  const [loadingProductId, setLoadingProductId] = useState<string | null>(null);

  //   get user
  const { user } = useAuth();

  const dispatch = useAppDispatch();

  // remove cart from server via rtk query
  const [removeCartItemFromDB, apiResponse] = useRemoveCartItemMutation();

  const handlerFunc = async (id: string) => {
    const userId = user?.id;

    // Set loading state for the specific product
    setLoadingProductId(id);

    // remove cart item from local storage if user not exists;
    if (!user && !userId) {
      dispatch(decreaseQuantity({ id }));
      setLoadingProductId(null);
      return;
    }

    // remove cart item from local storage if user not exists;
    await removeCartItemFromDB({
      product: id,
    });

    setLoadingProductId(null);
  };

  useApiMutationResponseHandler({
    apiResponse,
    successMessage: "Item Removed Successfully",
    onClose,
  });

  return {
    handlerFunc,
    ...apiResponse,
    loadingProductId,
  };
}
