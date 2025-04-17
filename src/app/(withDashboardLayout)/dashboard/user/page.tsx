"use client";
import { useGetUserMetaQuery } from "@/redux/api/meta.api";
import UserDashboardWithHOC from "./Components/UserDashboardHOC";

export default function UserDashboard() {
  const query = useGetUserMetaQuery(undefined);

  return <UserDashboardWithHOC query={query} />;
}
