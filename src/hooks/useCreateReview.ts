"use client";
import { useCreateReviewMutation } from "@/redux/api";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";
import { useAuth } from "./useAuth";

export default function useCreateReview() {
  const [createReview, apiResponse] = useCreateReviewMutation();
  const { user } = useAuth();

  const handlerFunc = async (values: FieldValues, id: string) => {
    if (!user) {
      toast.error("Please, login to add a review.");
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
