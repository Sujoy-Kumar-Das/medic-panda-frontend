"use client";
import { useGetAllWishListProductsQuery } from "@/redux/api/wish-listApi";
import { IGenericErrorResponse } from "@/types";
import WishListProductWithHOC from "./Components/WishListHOC";

export default function WishListPage() {
  const { data, isLoading, error } = useGetAllWishListProductsQuery(undefined);

  return (
    <WishListProductWithHOC
      data={data}
      isLoading={isLoading}
      error={error as IGenericErrorResponse}
      noDataLink="/product"
      noDataText="Start Shopping"
      noDataMessage="Your wishlist is empty. Add items to your wishlist and come back here to view them."
    />
  );
}
