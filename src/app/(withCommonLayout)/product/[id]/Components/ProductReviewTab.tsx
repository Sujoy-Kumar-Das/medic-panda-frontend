"use client";
import { useGetAllReviewQuery } from "@/redux/api/review.api";
import NoReviewFound from "./NoReviewFound";
import ProductReviewHOC from "./ProductReviewHOC";
import ReviewSkeletons from "./ReviewCardSkeletons";

const ProductReviewTab = ({ productId }: { productId: string }) => {
  const query = useGetAllReviewQuery(productId);

  return (
    <ProductReviewHOC
      query={query}
      noDataMessage="This item had no review."
      LoaderCompo={ReviewSkeletons}
      NoDataCompo={NoReviewFound}
    />
  );
};

export default ProductReviewTab;
