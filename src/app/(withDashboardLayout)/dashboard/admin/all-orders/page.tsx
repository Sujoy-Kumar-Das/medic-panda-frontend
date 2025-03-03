"use client";
import { useGetAllOrdersForAdminQuery } from "@/redux/api/order.api";
import { IGenericErrorResponse } from "@/types";
import OrdersHOC from "./Components/OrdersHOC";

export default function AllOrdersPage() {
  const { data, isLoading, error } = useGetAllOrdersForAdminQuery(undefined);

  return (
    <OrdersHOC
      data={data}
      error={error as IGenericErrorResponse}
      isLoading={isLoading}
    />
  );
}
