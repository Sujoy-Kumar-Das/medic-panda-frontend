"use client";
import { useGetAllCartProductsQuery } from "@/redux/api/addToCart.api";
import MyCartWithHOC from "./Components/MyCartWithHOC";

export default function MyCartPage() {
  const query = useGetAllCartProductsQuery(undefined);

  return (
    <MyCartWithHOC
      query={query}
      noDataMessage="You cart is empty."
      noDataText="Shop Now"
      noDataLink="/product"
    />
  );
}
