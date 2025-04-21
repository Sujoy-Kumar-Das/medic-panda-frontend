"use client";
import ErrorCard from "@/components/shared/error/ErrorCard";
import NoDataFoundCard from "@/components/shared/notFound/NoDataFoundCard";
import { useGetAllReviewQuery } from "@/redux/api/review.api";
import ProductReviewHOC from "./ProductReviewHOC";
import ReviewSkeletons from "./ReviewCardSkeletons";

const ProductReviewTab = ({ productId }: { productId: string }) => {
  const query = useGetAllReviewQuery(productId);

  return (
    <ProductReviewHOC
      query={query}
      noDataMessage="This item had no review."
      LoaderCompo={ReviewSkeletons}
      NoDataCompo={() => (
        <NoDataFoundCard
          title="No Reviews Found"
          subtitle="Be the first to share your thoughts about this product."
          sxProps={{
            marginTop: 3,
          }}
        />
      )}
      ErrorCompo={ErrorCard}
    />
  );
};

export default ProductReviewTab;
