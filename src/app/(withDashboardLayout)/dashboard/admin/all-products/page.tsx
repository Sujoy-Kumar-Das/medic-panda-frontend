"use client";

import { useQueryParams } from "@/hooks/useQueryParams";
import { useGetAllProductsQuery } from "@/redux/api/product.api";
import { IGenericErrorResponse } from "@/types";
import AllProductsHOC from "./Components/all-product-HOC/AllProductHOC";

export default function AllProductsPage() {
  const queryParams = useQueryParams();

  const { data, isLoading, error } = useGetAllProductsQuery(queryParams);

  return (
    <AllProductsHOC
      data={data || []}
      isLoading={isLoading}
      error={error as IGenericErrorResponse}
      noDataLink="/dashboard/admin/all-products"
      noDataMessage="No Product Found."
      noDataText="Back To All Products"
    />
  );
}
