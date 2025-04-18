"use client";
import { useCreateReviewMutation } from "@/redux/api/review.api";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";
import { useAuth } from "./useAuth";

export default function useCreateReview(id: String) {
  const [createReview, apiResponse] = useCreateReviewMutation();

  const { user } = useAuth();

  const handlerFunc = async (values: FieldValues) => {
    if (!user) {
      toast.error("Please,login for add a review.");
      return;
    }

    const reviewData = {
      user: user.id,
      product: id,
      comment: values.comment,
      rating: values.rating,
    };

    await createReview(reviewData);
  };

  useApiMutationResponseHandler({
    successMessage: "Thanks for your review.",
    apiResponse,
  });

  return { handlerFunc, ...apiResponse };
}
