"use client";

import { useQueryParams } from "@/hooks/useQueryParams";
import { useGetAllOrderQuery } from "@/redux/api";
import UserOrderHOC from "./Components/UserOrderCompo";

export default function OrdersPage() {
  const queryParams = useQueryParams();
  const query = useGetAllOrderQuery(queryParams);

  return <UserOrderHOC query={query} />;
}
