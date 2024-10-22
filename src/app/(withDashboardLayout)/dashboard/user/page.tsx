"use client";
import { useGetUserMetaQuery } from "@/redux/api/meta.api";
import { useGetMeQuery } from "@/redux/api/myProfile.api";
import { IGenericErrorResponse } from "@/types";
import UserDashboardWithHOC from "./Components/UserDashboardHOC";

const cardColors = [
  {
    gradient: "linear-gradient(135deg, #42a5f5, #478ed1)",
    title: "Total Orders",
  },
  {
    gradient: "linear-gradient(135deg, #66bb6a, #43a047)",
    title: "Wishlist Items",
  },
  {
    gradient: "linear-gradient(135deg, #ffa726, #fb8c00)",
    title: "Cart Items",
  },
  {
    gradient: "linear-gradient(135deg, #ef5350, #e53935)",
    title: "Total Purchase",
  },
  {
    gradient: "linear-gradient(135deg, #ab47bc, #8e24aa)",
    title: "Completed Orders",
  },
  {
    gradient: "linear-gradient(135deg, #26c6da, #00acc1)",
    title: "Pending Orders",
  },
  {
    gradient: "linear-gradient(135deg, #ff7043, #f4511e)",
    title: "Returned Orders",
  },
  {
    gradient: "linear-gradient(135deg, #8d6e63, #6d4c41)",
    title: "Unpaid Orders",
  },
];

export default function UserDashboard() {
  const { data, isLoading, error } = useGetUserMetaQuery(undefined);
  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useGetMeQuery(undefined);

  const userMetaData = [
    { value: data?.totalOrders || 0, ...cardColors[0] },
    { value: data?.wishListItem || 0, ...cardColors[1] },
    { value: data?.cartItem || 0, ...cardColors[2] },
    {
      value: `$ ${Number(data?.totalPurchasePrice).toFixed(2) || 0}`,
      ...cardColors[3],
    },
    { value: data?.completedOrders || 0, ...cardColors[4] },
    { value: data?.pendingOrders || 0, ...cardColors[5] },
    { value: data?.returnedOrders || 0, ...cardColors[6] },
    { value: data?.unPaidOrders || 0, ...cardColors[7] },
  ];

  const loader = isLoading || userLoading;
  const allErrors =
    (error as IGenericErrorResponse) || (userError as IGenericErrorResponse);

  return (
    <UserDashboardWithHOC
      data={{ user, userMetaData }}
      isLoading={loader}
      error={allErrors}
    />
  );
}
