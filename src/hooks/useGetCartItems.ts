"use client";

import { useGetAllCartsQuery } from "@/redux/api/cart/cart.api";
import { ICartItemLocal } from "@/redux/features/cart.slice";
import { useAppSelector } from "@/redux/hooks";
import { ICart, IModifiedCartData } from "@/types";
import { useMemo } from "react";
import { useAuth } from "./useAuth";

export default function useGetCartItems() {
  const { carts } = useAppSelector((state) => state.cart);
  const { data, ...apiResponse } = useGetAllCartsQuery(undefined);
  const { user } = useAuth();

  const cartData: IModifiedCartData[] | undefined = useMemo(() => {
    if (user && user.id && data?.length) {
      return data.map((cart: ICart) => ({
        id: cart?._id,
        name: cart?.product?.name,
        thumbnail: cart?.product?.thumbnail,
        total: cart.totalPrice,
        quantity: cart.quantity,
      }));
    } else if (!user && carts.length) {
      return carts.map((cart: ICartItemLocal) => ({
        id: cart.id,
        name: cart?.name,
        thumbnail: cart.thumbnail,
        total: cart.totalPrice,
        quantity: cart.quantity,
      }));
    } else {
      return undefined;
    }
  }, [carts, data, user]);

  return { cartData, ...apiResponse };
}
