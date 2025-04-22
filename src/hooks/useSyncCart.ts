"use client";
import { useAddToCartMutation } from "@/redux/api/cart/cart.api";
import { ICartItemLocal, removeProduct } from "@/redux/features/cart.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useCallback } from "react";

interface IHandleCartSyncParams {
  isLoginSuccess: boolean;
}

export default function useSyncCart() {
  const [addToCart, apiResponse] = useAddToCartMutation();
  const { carts } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleCartSync = useCallback(
    async ({ isLoginSuccess }: IHandleCartSyncParams) => {
      if (!isLoginSuccess || !carts.length) return;

      const removeProductIds: string[] = [];

      //  add all items to the cart and collect IDs to remove
      await Promise.all(
        carts.map(async (item: ICartItemLocal) => {
          const cartItem = {
            product: item.id,
            quantity: item.quantity,
          };

          const response = await addToCart(cartItem);
          if (response?.data?._id) {
            // save the id in the array. Remove from redux store;
            removeProductIds.push(item.id);
          }
        })
      );

      // remove all id's from the redux store;
      if (removeProductIds.length) {
        removeProductIds.forEach((id) => dispatch(removeProduct({ id })));
      }
    },
    [addToCart, carts, dispatch]
  );

  return { handleCartSync, ...apiResponse };
}
