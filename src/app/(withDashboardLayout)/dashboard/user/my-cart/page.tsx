"use client";
import { useGetAllCartsQuery } from "@/redux/api/cart/cart.api";
import MyCartWithHOC from "./Components/MyCartWithHOC";

export default function MyCartPage() {
  const query = useGetAllCartsQuery(undefined);

  return (
    <MyCartWithHOC
      query={query}
      noDataMessage="You cart is empty."
      noDataText="Shop Now"
      noDataLink="/product"
    />
  );
}
