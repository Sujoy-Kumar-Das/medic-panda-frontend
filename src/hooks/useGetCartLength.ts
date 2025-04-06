import { useGetCartLengthQuery } from "@/redux/api/addToCart.api";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

// custom hook for get the cart length sync with server and redux store;
export default function useGetCartLength() {
  const [cartLength, setCartLength] = useState<0>(0);
  const { user } = useAuth();

  const { carts } = useAppSelector((state) => state.cart);
  const { data, isLoading } = useGetCartLengthQuery(undefined);

  useEffect(() => {
    if (!user) {
      setCartLength(carts.length);
    } else {
      setCartLength(data);
    }
  }, [carts, data, user, isLoading]);

  return { cartLength };
}
