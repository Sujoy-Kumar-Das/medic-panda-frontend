"use client";
import { useGetSingleCartProductsQuery } from "@/redux/api/addToCart.api";
import { useGetMeQuery } from "@/redux/api/myProfile.api";
import {
  BaseQueryFn,
  TypedUseQueryHookResult,
} from "@reduxjs/toolkit/query/react";

export default function useOrderDataAndGetMeCombinedQuery(id: string) {
  const userQuery = useGetMeQuery(undefined);
  const orderQuery = useGetSingleCartProductsQuery(id);

  const isLoading = userQuery.isLoading || orderQuery.isLoading;
  const isError = userQuery.isError || orderQuery.isError;
  const isFetching = userQuery.isFetching || orderQuery.isFetching;
  const error = userQuery.error || orderQuery.error;
  const refetch = () => {
    userQuery.refetch();
    orderQuery.refetch();
  };

  const data = {
    userInfo: userQuery.data,
    orderItem: orderQuery.data,
  };

  const combinedQuery = {
    data,
    isLoading,
    isError,
    isFetching,
    error,
    refetch,
    status: "fulfilled",
    isUninitialized: false,
    isSuccess: true,
  } as TypedUseQueryHookResult<typeof data, unknown, BaseQueryFn>;

  return { combinedQuery };
}
