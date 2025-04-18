"use client";
import { useGetSingleCartProductsQuery } from "@/redux/api/addToCart.api";
import PlaceOrderHOC from "./Components/PlaceOrderHOC";

export default function PlaceOrderPage({ params }: { params: { id: string } }) {
  // get order details redux hook

  const query = useGetSingleCartProductsQuery(params.id);

  return <PlaceOrderHOC query={query} />;
}
