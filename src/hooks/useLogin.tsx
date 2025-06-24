"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useLoginMutation } from "@/redux/api";
import { IGenericErrorResponse } from "@/types";
import { useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useAuth } from "./useAuth";
import useRedirect from "./useRedirect";
import useSyncCart from "./useSyncCart";

export const useLogin = (onSuccess?: () => void) => {
  const [login, { isSuccess: isLoginSuccess, ...apiResponse }] =
    useLoginMutation();

  // custom hook for sync the cart
  const {
    handleCartSync,
    isLoading: cartLoading,
    isError: cartError,
    error: cartErrorMessage,
    isSuccess: isCartSuccess,
  } = useSyncCart();

  // auth context for set the user;
  const { loginUser } = useAuth();

  // get the redirect path after login;
  const { router, redirect } = useRedirect();

  // handler function for handle login users;
  const handlerFunc = async (data: FieldValues) => {
    await login(data);
  };

  // sync the loading,error and is error state
  const isLoading = apiResponse.isLoading || cartLoading;
  const error = apiResponse.error || cartErrorMessage;
  const isError = apiResponse.isError || cartError;
  const isSuccess = isLoginSuccess || isCartSuccess;

  // handling the cart synchronous, store user data and redirect user;
  useEffect(() => {
    if (isLoginSuccess) {
      router.push(redirect);
      handleCartSync({ isLoginSuccess });
      loginUser();
      onSuccess && onSuccess();
    }

    if (error && isError) {
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
    isSuccess,
  };
};
