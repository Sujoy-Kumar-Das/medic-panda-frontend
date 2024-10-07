import { useAddToCartMutation } from "@/redux/api/addToCart.api";
import { useLoginMutation } from "@/redux/api/auth.api";
import { IGenericErrorMessage } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";

export const useLogin = () => {
  // login hook redux
  const [login, { isLoading, isSuccess: isLoginSuccess, isError, error }] =
    useLoginMutation();
  const [addToCart] = useAddToCartMutation();

  const [isSuccess, setIsSuccess] = useState(false); // Local state to track success
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Error message state

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  // login handler
  const handleLogin = async (data: FieldValues) => {
    await login(data);
  };

  useEffect(() => {
    const handleCartSync = async () => {
      try {
        if (isLoginSuccess) {
          setIsSuccess(true);
          // Redirect after cart sync
          if (redirect) {
            router.push(redirect as string);
          } else {
            router.push("/");
          }
        }
      } catch (err) {
        console.error("Error during cart sync:", err);
        setErrorMessage((err as IGenericErrorMessage)?.message);
      }
    };

    // Handle login success and cart synchronization
    if (isLoginSuccess) {
      handleCartSync();
    } else if (isError) {
      const errorMsg =
        (error as IGenericErrorMessage)?.message || "Login failed";
      setErrorMessage(errorMsg);
    }
  }, [isLoginSuccess, isError, error, router, redirect, addToCart]);

  return { handleLogin, isLoading, isSuccess, errorMessage };
};
