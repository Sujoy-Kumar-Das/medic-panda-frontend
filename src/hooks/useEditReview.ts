"use client";
import { useEditReviewMutation } from "@/redux/api";
import { FieldValues } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useEditReview(onClose: () => void) {
  const [editReview, apiResponse] = useEditReviewMutation();

  const handlerFunc = async (data: FieldValues, id: string) => {
    await editReview({ data, id });
  };

  useApiMutationResponseHandler({
    successMessage: "Review Updated Successfully",
    apiResponse,
    onClose,
  });

  return { handlerFunc, ...apiResponse };
}
