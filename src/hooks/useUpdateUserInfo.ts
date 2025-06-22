"use client";
import { useUpdateUserInfoMutation } from "@/redux/api";
import { FieldValues } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useUpdateUserInfo(onClose?: () => void) {
  const [updateUserInfo, apiResponse] = useUpdateUserInfoMutation();

  const handlerFunc = async (value: FieldValues) => {
    await updateUserInfo(value).unwrap();
  };

  useApiMutationResponseHandler({
    apiResponse,
    successMessage: "User Information Updated Successfully",
    onClose,
  });

  return { handlerFunc, ...apiResponse };
}
