"use client";
import { useAddReplyMutation } from "@/redux/api";
import { FieldValues } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useAddReply(onClose: () => void) {
  const [addReply, apiResponse] = useAddReplyMutation();

  const handlerFunc = async (data: FieldValues, id: string) => {
    await addReply({ data, id });
  };

  useApiMutationResponseHandler({
    successMessage: "Reply Added Successfully",
    onClose,
    apiResponse,
  });

  return { handlerFunc, ...apiResponse };
}
