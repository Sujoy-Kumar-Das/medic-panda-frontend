"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useLoginMutation } from "@/redux/api/auth.api";
import { IGenericErrorResponse } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useAuth } from "./useAuth";
import useSyncCart from "./useSyncCart";

export const useLogin = () => {
  const [login, { isSuccess: isLoginSuccess, data, ...apiResponse }] =
    useLoginMutation();

  // custom hook for sync the cart
  const {
    handleCartSync,
    isLoading: cartLoading,
    isError: cartError,
    error: cartErrorMessage,
  } = useSyncCart();

  // auth context for set the user;
  const { loginUser } = useAuth();

  // get the redirect path after login;
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  // handler function for handle login users;
  const handlerFunc = async (data: FieldValues) => {
    await login(data);
  };

  // sync the loading,error and is error state
  const isLoading = apiResponse.isLoading || cartLoading;
  const error = apiResponse.error || cartErrorMessage;
  const isError = apiResponse.isError || cartError;

  // handling the cart synchronous, store user data and redirect user;
  useEffect(() => {
    if (isLoginSuccess) {
      handleCartSync({ isLoginSuccess });
      loginUser(data);
      router.push(redirect || "/");
    }

    if (error && isError) {
      console.log({ error });
      const errorMessage = (error as IGenericErrorResponse).message;
      toast.error(errorMessage);
    }
  }, [isLoginSuccess, handleCartSync, error, isError]);

  return {
    handlerFunc,
    ...apiResponse,
    isLoading,
    isError,
    error,
  };
};
