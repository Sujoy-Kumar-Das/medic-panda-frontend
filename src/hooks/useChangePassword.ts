"use client";
import { useChangePasswordMutation } from "@/redux/api";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";
import { useAuth } from "./useAuth";

export default function useChangePassword(onClose: () => void) {
  const [changePassword, apiResponse] = useChangePasswordMutation();

  const { logoutUser } = useAuth();

  const router = useRouter();

  const handlerFunc = async (value: FieldValues) => {
    await changePassword(value);
  };

  useApiMutationResponseHandler({
    successMessage: "Password updated. Sign in to continue.",
    apiResponse,
    onClose: () => logoutUser({ router, path: "/register/login" }),
  });

  return { handlerFunc, ...apiResponse };
}
