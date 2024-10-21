"use client";
import { useGetSingleCartProductsQuery } from "@/redux/api/addToCart.api";
import { useGetMeQuery } from "@/redux/api/myProfile.api";
import { IGenericErrorResponse } from "@/types";
import PlaceOrderHOC from "./Components/PlaceOrderHOC";

export default function PlaceOrderPage({ params }: { params: { id: string } }) {
  // get user info redux hook
  const {
    data: userInfo,
    isLoading: userLoading,
    error: userError,
  } = useGetMeQuery(undefined);

  // get order details redux hook
  const {
    data: orderItem,
    isLoading: orderLoading,
    error: orderError,
  } = useGetSingleCartProductsQuery(params.id);

  const errorResponse =
    (userError as IGenericErrorResponse) ||
    (orderError as IGenericErrorResponse);

  const isLoading = userLoading || orderLoading;

  return (
    <PlaceOrderHOC
      data={{ userInfo, orderItem }}
      error={errorResponse}
      isLoading={isLoading}
    />
  );
}
