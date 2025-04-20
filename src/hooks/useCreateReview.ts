"use client";
import { useCreateReviewMutation } from "@/redux/api/review.api";
import { FieldValues, useFormContext } from "react-hook-form";
import { toast } from "sonner";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";
import { useAuth } from "./useAuth";

export default function useCreateReview(id: string) {
  const [createReview, apiResponse] = useCreateReviewMutation();
  const formContext = useFormContext(); // ⬅️ get reset from here
  const { user } = useAuth();

  const handlerFunc = async (values: FieldValues) => {
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
    onClose: () => formContext?.reset(), // ✅ reset form only on success
  });

  return { handlerFunc, ...apiResponse };
}
