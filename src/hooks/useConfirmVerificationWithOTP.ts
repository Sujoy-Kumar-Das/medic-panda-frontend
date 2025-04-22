"use client";
import { useConfirmUserOTPMutation } from "@/redux/api";
import { FieldValues } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useConfirmVerificationWithOTP(onClose: () => void) {
  const [verifyUserOtp, apiResponse] = useConfirmUserOTPMutation();

  const handlerFunc = async (value: FieldValues) => {
    const data = { otp: Number(value.otp) };
    await verifyUserOtp(data);
  };

  useApiMutationResponseHandler({
    successMessage: "Account verified successfully.",
    apiResponse,
    onClose,
  });

  return { handlerFunc, ...apiResponse };
}
