import { ProductReviewAndReplyContext } from "@/context/ProductReiewAndReply";
import { useContext } from "react";

export default function useProductReviewAndReplyContext() {
  const context = useContext(ProductReviewAndReplyContext);

  if (!context) {
    throw new Error(
      "You access the value of product ProductReviewAndReplyContext outside of a provider."
    );
  }

  return { ...context };
}
