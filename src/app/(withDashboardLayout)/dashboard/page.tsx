"use client";

import { useGetMeQuery } from "@/redux/api/myProfile.api";
import { IGenericErrorResponse } from "@/types";
import UserInfoHOC from "./Components/UserInfoHOC";

export default function MyProfilePage() {
  // get user data
  const { data, isLoading, error } = useGetMeQuery(undefined);

  return (
    <UserInfoHOC
      data={data}
      isLoading={isLoading}
      error={error as IGenericErrorResponse}
      noDataLink="/register/login"
      noDataMessage="You Are Not Authorize User."
      noDataText="Login Now"
    />
  );
}
