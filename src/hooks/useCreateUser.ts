"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useCreateUserMutation } from "@/redux/api/user.api";
import { IGenericErrorResponse } from "@/types";
import { imageUploader } from "@/utils/imageUploader";
import { useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useAuth } from "./useAuth";
import useRedirect from "./useRedirect";
import useSyncCart from "./useSyncCart";

export const useCreateUser = () => {
  // RTK hook for create the user;
  const [createUser, { isSuccess, error, isLoading, isError }] =
    useCreateUserMutation();

  // custom hook for sync the cart with DB
  const {
    handleCartSync,
    isLoading: cartLoading,
    isError: cartError,
    error: cartErrorMessage,
    isSuccess: isCartSuccess,
  } = useSyncCart();

  // auth custom hook manage the user state
  const { loginUser } = useAuth();

  // custom hook for manage the router redirection;
  const { redirect, router } = useRedirect();

  // handler function for create the user
  const handlerFunc = async (formData: FieldValues) => {
    try {
      const photoUrl = await imageUploader(formData.photo);
      const payload = { ...formData, photo: photoUrl };
      await createUser(payload);
    } catch (err) {
      toast.error("Something went wrong while creating the account.");
    }
  };

  // Merge status
  const finalLoading = isLoading || cartLoading;
  const finalError = error || cartErrorMessage;
  const finalIsError = isError || cartError;
  const finalIsSuccess = isSuccess && isCartSuccess;

  // managing the api state based on RTK state status;
  useEffect(() => {
    if (isSuccess) {
      handleCartSync({ isLoginSuccess: true });
      loginUser();
      toast.success("Account Created Successfully.");
      router.push(redirect);
    }

    if (finalIsError && finalError) {
      const message =
        (finalError as IGenericErrorResponse)?.message ||
        "Something went wrong.";
      toast.error(message);
    }
  }, [isSuccess, finalIsError, finalError]);

  return {
    handlerFunc,
    isLoading: finalLoading,
    isError: finalIsError,
    error: finalError,
    isSuccess: finalIsSuccess,
  };
};
