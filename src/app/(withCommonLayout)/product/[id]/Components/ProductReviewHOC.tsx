"use client";

import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import ProductReviewCompo from "./ProductReviewCompo";

const ProductReviewHOC = HandleLoadingErrorAndNoData(ProductReviewCompo);

export default ProductReviewHOC;
