"use client";
import ErrorCard from "@/components/shared/error/ErrorCard";
import NoDataFoundCard from "@/components/shared/notFound/NoDataFoundCard";
import ProductReviewAndReplyContextProvider from "@/lib/providers/ProductReviewAndReplyContextProvider";
import { useGetAllReviewQuery } from "@/redux/api";
import { IGenericErrorResponse } from "@/types";
import ProductReviewCompo from "./ProductReviewCompo";
import ReviewSkeletons from "./ReviewCardSkeletons";

const ProductReviewTab = ({ productId }: { productId: string }) => {
  const { data, isLoading, error } = useGetAllReviewQuery(productId);

  if (isLoading) {
    return <ReviewSkeletons />;
  }

  if (error) {
    return <ErrorCard error={error as IGenericErrorResponse} />;
  }

  if (!data.length) {
    return (
      <NoDataFoundCard
        title="No Reviews Found"
        subtitle="Be the first to share your thoughts about this product."
        sxProps={{
          marginTop: 3,
        }}
      />
    );
  }

  return (
    <ProductReviewAndReplyContextProvider>
      <ProductReviewCompo data={data} />
    </ProductReviewAndReplyContextProvider>
  );
};

export default ProductReviewTab;
