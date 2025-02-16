"use client";

import { useGetAllProductsQuery } from "@/redux/api/product.api";
import { IGenericErrorResponse } from "@/types";
import AllProductsHOC from "./Components/all-product-HOC/AllProductHOC";

export default function AllProductsPage() {
  const { data, isLoading, error } = useGetAllProductsQuery(undefined);

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
