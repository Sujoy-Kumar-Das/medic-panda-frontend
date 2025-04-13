"use client";
import { useGetSingleCartProductsQuery } from "@/redux/api/addToCart.api";
import PlaceOrderHOC from "./Components/PlaceOrderHOC";
import useOrderDataAndGetMeCombinedQuery from "@/hooks/useOrderDataAndGetMeCombinedQuery";

export default function PlaceOrderPage({ params }: { params: { id: string } }) {
  // get order details redux hook
  const { combinedQuery } = useOrderDataAndGetMeCombinedQuery(params.id);

  return <PlaceOrderHOC query={combinedQuery} />;
}
