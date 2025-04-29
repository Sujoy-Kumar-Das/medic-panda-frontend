"use client";
import { useResetPasswordMutation } from "@/redux/api";
import { useRouter, useSearchParams } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useResetPassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const router = useRouter();

  const [resetPassword, apiResponse] = useResetPasswordMutation();

  const handlerFunc = async (values: FieldValues) => {
    await resetPassword({ data: values, token });
  };

  useApiMutationResponseHandler({
    successMessage: "Password Reset Successfully.Please Login Now.",
    apiResponse,
    onClose: () => router.push("/register/login"),
  });

  return { handlerFunc, ...apiResponse };
}
