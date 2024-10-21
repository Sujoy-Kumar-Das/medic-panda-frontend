"use client";
import { useGetAllCartProductsQuery } from "@/redux/api/addToCart.api";
import { IGenericErrorResponse } from "@/types";
import MyCartWithHOC from "./Components/MyCartWithHOC";

export default function MyCartPage() {
  const { data, isLoading, error } = useGetAllCartProductsQuery(undefined);

  return (
    <MyCartWithHOC
      data={data ?? []}
      isLoading={isLoading}
      error={error as IGenericErrorResponse}
    />
  );
}
