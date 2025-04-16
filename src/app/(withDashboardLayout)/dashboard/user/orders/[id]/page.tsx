"use client";
import { useGetSingleOrderQuery } from "@/redux/api/order.api";
import OrderDetailsWithHOC from "./Components/OrderDetailsHOC";

export default function OrderDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const query = useGetSingleOrderQuery(params.id);

  return (
    <OrderDetailsWithHOC
      query={query}
      noDataLink="/shop"
      noDataText="Shop"
      noDataMessage="You don't have any order now."
    />
  );
}
