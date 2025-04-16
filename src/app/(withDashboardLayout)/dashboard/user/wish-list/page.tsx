"use client";
import { useGetAllWishListProductsQuery } from "@/redux/api/wish-listApi";
import WishListProductWithHOC from "./Components/WishListHOC";

export default function WishListPage() {
  const query = useGetAllWishListProductsQuery(undefined);

  return (
    <WishListProductWithHOC
      query={query}
      noDataLink="/product"
      noDataText="Start Shopping"
      noDataMessage="Your wishlist is empty. Add items to view."
    />
  );
}
