"use client";

import { useGetAllCartProductsQuery } from "@/redux/api/addToCart.api";
import { ICartItemLocal } from "@/redux/features/cart.slice";
import { useAppSelector } from "@/redux/hooks";
import { ICart, IModifiedCartData } from "@/types";
import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

export default function useGetCartItems() {
  const [cartData, setCartData] = useState<IModifiedCartData[] | undefined>(
    undefined
  );

  // get carts from local storage via redux state
  const { carts } = useAppSelector((state) => state.cart);

  // get carts from server via rtk query
  const { data, ...apiResponse } = useGetAllCartProductsQuery(undefined);

  // auth state from context api
  const { user } = useAuth();

  useEffect(() => {
    if (user && user.id && data?.length) {
      setCartData(
        data.map((cart: ICart) => ({
          id: cart?.product?._id,
          name: cart?.product?.name,
          thumbnail: cart?.product?.thumbnail,
          total: cart.totalPrice,
          quantity: cart.quantity,
        }))
      );
    } else if (!user && carts.length) {
      setCartData(
        carts.map((cart: ICartItemLocal) => ({
          id: cart.id,
          name: cart?.name,
          thumbnail: cart.thumbnail,
          total: cart.totalPrice,
          quantity: cart.quantity,
        }))
      );
    } else {
      setCartData(undefined);
    }
  }, [carts, data, user]);

  return { cartData, ...apiResponse };
}
