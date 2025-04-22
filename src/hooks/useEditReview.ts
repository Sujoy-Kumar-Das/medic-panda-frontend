"use client";
import { FieldValues } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";
import { useEditReviewMutation } from "@/redux/api";

export default function useEditReview(id: string, onClose: () => void) {
  const [editReview, apiResponse] = useEditReviewMutation();

  const handlerFunc = async (data: FieldValues) => {
    await editReview({ data, id });
  };

  useApiMutationResponseHandler({
    successMessage: "Review Updated Successfully",
    apiResponse,
    onClose,
  });

  return { handlerFunc, ...apiResponse };
}
