"use client";
import useSocket from "@/hooks/useSocket";
import { useGetAllCartProductsQuery } from "@/redux/api/addToCart.api";
import { IGenericErrorResponse } from "@/types";
import MyCartWithHOC from "./Components/MyCartWithHOC";

export default function MyCartPage() {
  const { data, isLoading, error, refetch } =
    useGetAllCartProductsQuery(undefined);

  // Use the custom socket hook
  // useSocket(["order"], () => {
  //   refetch();
  // });

  return (
    <MyCartWithHOC
      data={data ?? []}
      isLoading={isLoading}
      error={error as IGenericErrorResponse}
      noDataMessage="You cart is empty."
      noDataText="Shop Now"
      noDataLink="/product"
    />
  );
}
