"use client";
import { useGetAllReviewQuery } from "@/redux/api/review.api";
import { IGenericErrorResponse } from "@/types";
import ProductReviewHOC from "./ProductReviewHOC";

const ProductReviewTab = () => {
  const { data, isLoading, error } = useGetAllReviewQuery(undefined);

  return (
    <ProductReviewHOC
      data={data}
      isLoading={isLoading}
      error={error as IGenericErrorResponse}
      noDataMessage="This item had no review."
    />
  );
};

export default ProductReviewTab;
