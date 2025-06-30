"use client";

import { useEditReplyMutation } from "@/redux/api";
import { FieldValues } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useEditReply(onClose: () => void) {
  const [edit, apiResponse] = useEditReplyMutation();

  const handleEditReply = async (data: FieldValues, id: string) => {
    await edit({ data, id });
  };

  useApiMutationResponseHandler({
    successMessage: "Reply updated successfully",
    apiResponse,
    onClose,
  });

  return { handleEditReply, ...apiResponse };
}
