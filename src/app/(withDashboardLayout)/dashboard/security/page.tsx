"use client";
import { useGetMeQuery } from "@/redux/api/myProfile.api";
import SecurityHOC from "./Components/SecurityHOC";

export default function SecurityPage() {
  const query = useGetMeQuery(undefined);

  return (
    <SecurityHOC
      query={query}
      noDataMessage="You are not authorize."
      noDataText="Login"
      noDataLink="/register/login"
    />
  );
}
