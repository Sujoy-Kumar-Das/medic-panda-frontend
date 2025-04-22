"use client";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useGetAllCategoriesQuery } from "@/redux/api/category/category.api";
import CategoryHOC from "./Components/CategoryHOC";

export default function AllCategoriesPage() {
  const queryParams = useQueryParams();
  const query = useGetAllCategoriesQuery(queryParams);

  return (
    <CategoryHOC
      query={query}
      noDataMessage="No Categories found."
      noDataText="Back to All Category."
    />
  );
}
