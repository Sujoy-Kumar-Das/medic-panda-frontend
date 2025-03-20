"use client";

import { useQueryParams } from "@/hooks/useQueryParams";
import { useGetAllProductsQuery } from "@/redux/api/product.api";
import AllProductsHOC from "./Components/all-product-HOC/AllProductHOC";

export default function AllProductsPage() {
  const queryParams = useQueryParams();

  const query = useGetAllProductsQuery(queryParams);

  return (
    <AllProductsHOC
      query={query}
      noDataLink="/dashboard/admin/all-products"
      noDataMessage="No Product Found."
      noDataText="Back To All Products"
    />
  );
}
