"use client";
import { useDeleteReviewMutation } from "@/redux/api";
import { useState } from "react";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useDeleteReview() {
  const [deleteReview, apiResponse] = useDeleteReviewMutation();
  const [reviewLoadingIds, setReviewLoadingIds] = useState<string[]>([]);

  const handlerDeleteReview = async (productId: string) => {
    try {
      setReviewLoadingIds((prev) => [...prev, productId]);
      await deleteReview(productId).unwrap();
    } finally {
      setReviewLoadingIds((prev) =>
        prev.filter((itemId) => itemId !== productId)
      );
    }
  };

  useApiMutationResponseHandler({
    successMessage: "Review Deleted Successfully.",
    apiResponse,
  });

  return { handlerDeleteReview, reviewLoadingIds, ...apiResponse };
}
