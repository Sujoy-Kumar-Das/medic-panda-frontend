"use client";
import { useGetSingleCartQuery } from "@/redux/api/cart/cart.api";
import PlaceOrderHOC from "./Components/PlaceOrderHOC";

export default function PlaceOrderPage({ params }: { params: { id: string } }) {
  // get order details redux hook
  const query = useGetSingleCartQuery(params.id);

  return (
    <PlaceOrderHOC
      query={query}
      noDataMessage="Currently you don't have any order."
      noDataLink="/product"
      noDataText="Shop Now"
    />
  );
}
