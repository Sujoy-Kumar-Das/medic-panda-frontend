"use client";
import { useGetMeQuery } from "@/redux/api/myProfile.api";
import UserInfoHOC from "./Components/UserInfoHOC";

export default function MyProfilePage() {
  // get user data
  const query = useGetMeQuery(undefined);

  return (
    <UserInfoHOC
      query={query}
      noDataLink="/register/login"
      noDataMessage="You Are Not Authorize User."
      noDataText="Login Now"
    />
  );
}
