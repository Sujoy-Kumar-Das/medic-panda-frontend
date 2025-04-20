import { useDeleteReviewMutation } from "@/redux/api/review.api";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useDeleteReview() {
  const [deleteReview, apiResponse] = useDeleteReviewMutation();

  const handlerFunc = async (productId: string) => {
    await deleteReview(productId);
  };

  useApiMutationResponseHandler({
    successMessage: "Review Deleted Successfully.",
    apiResponse,
  });

  return { handlerFunc, ...apiResponse };
}
