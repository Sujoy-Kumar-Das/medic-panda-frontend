import { authKey } from "@/constants/auth.key";
import { useAddToCartMutation } from "@/redux/api/addToCart.api";
import { useLoginMutation } from "@/redux/api/auth.api";
import { removeProduct } from "@/redux/features/cart.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { IGenericErrorMessage } from "@/types";
import { setToLocalStorage } from "@/utils/local-storage";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export const useLogin = () => {
  const [
    login,
    { isLoading, isSuccess: isLoginSuccess, isError, error, data },
  ] = useLoginMutation();

  const [addToCart, { isSuccess: isAddToCartSuccess }] = useAddToCartMutation();

  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  const { carts } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  // handle sync cart local to remote
  const handleCartSync = useCallback(async () => {
    try {
      if (isLoginSuccess && carts.length) {
        const productsToRemove = []; // Temporary array to store products that need to be removed

        for (const item of carts) {
          const cartItem = {
            product: item.id,
            quantity: item.quantity,
          };

          // Add to cart (remote) and await its completion
          const res = await addToCart(cartItem).unwrap();

          if (res._id) {
            // Push the product ID to the removal queue if successfully added
            productsToRemove.push(item.id);
          }
        }

        // After all products are successfully added, remove them from the cart
        productsToRemove.forEach((id) => {
          dispatch(removeProduct({ id }));
        });
      }

      // set token to local storage
      setToLocalStorage(authKey, data);

      setIsSuccess(true); // Set success state after the entire process
      router.push(redirect || "/"); // Redirect after sync
    } catch (err) {
      console.error("Error during cart sync:", err);
      setErrorMessage((err as IGenericErrorMessage)?.message);
    }
  }, [isLoginSuccess, carts, redirect, router, addToCart, dispatch, data]);

  useEffect(() => {
    if (isLoginSuccess) {
      handleCartSync();
    } else if (isError) {
      const errorMsg =
        (error as IGenericErrorMessage)?.message || "Login failed";
      setErrorMessage(errorMsg);
    }
  }, [isLoginSuccess, isError, error, handleCartSync]);

  return { login, isLoading, isSuccess, errorMessage };
};
