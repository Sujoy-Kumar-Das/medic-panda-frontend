"use client";
import { useDeleteReplyMutation } from "@/redux/api";
import { useState } from "react";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useDeleteReply() {
  const [deleteReply, apiResponse] = useDeleteReplyMutation();
  const [loadingIds, setLoadingIds] = useState<string[]>([]);

  const handleReplyDelete = async (id: string) => {
    try {
      setLoadingIds((prev) => [...prev, id]);
      await deleteReply(id).unwrap();
    } finally {
      setLoadingIds((prev) => prev.filter((itemId) => itemId !== id));
    }
  };

  useApiMutationResponseHandler({
    successMessage: "Reply Deleted Successfully",
    apiResponse,
  });

  return { handleReplyDelete, loadingIds, ...apiResponse };
}
