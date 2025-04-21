"use client";
import { useEditReplyMutation } from "@/redux/api/reply.api";
import { FieldValues } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useEditReply(id: string, onClose: () => void) {
  const [edit, apiResponse] = useEditReplyMutation();

  const handlerFunc = async (data: FieldValues) => {
    await edit({ data, id });
  };

  useApiMutationResponseHandler({
    successMessage: "Reply updated successfully",
    apiResponse,
    onClose,
  });

  return { handlerFunc, ...apiResponse };
}
