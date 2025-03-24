"use client";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useGetAllOrdersForAdminQuery } from "@/redux/api/order.api";
import OrdersHOC from "./Components/OrdersHOC";

export default function AllOrdersPage() {
  const queryParams = useQueryParams();
  const query = useGetAllOrdersForAdminQuery(queryParams);

  return <OrdersHOC query={query} />;
}
