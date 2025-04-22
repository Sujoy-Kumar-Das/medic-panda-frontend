import { useGetCartLengthQuery } from "@/redux/api/cart/cart.api";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

// custom hook to get the cart length synced with server and redux store
export default function useGetCartLength() {
  const [cartLength, setCartLength] = useState<number>(0);
  const { user } = useAuth();

  const { carts } = useAppSelector((state) => state.cart);
  const { data } = useGetCartLengthQuery(undefined);

  useEffect(() => {
    if (!user) {
      if (cartLength !== carts.length) {
        setCartLength(carts.length);
      }
    } else if (data !== undefined && cartLength !== data) {
      setCartLength(data);
    }
  }, [carts.length, data, user, cartLength]);

  return { cartLength };
}
