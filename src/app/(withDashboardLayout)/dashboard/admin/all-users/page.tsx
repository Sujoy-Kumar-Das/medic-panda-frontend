"use client";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useGetAllUsersQuery } from "@/redux/api";
import AllUserDataHOC from "./Components/AllUserDataHOC";
export default function AllUsersPage() {
  const queryParams = useQueryParams();
  const query = useGetAllUsersQuery(queryParams);

  return (
    <AllUserDataHOC
      query={query}
      noDataLink="/dashboard/admin/all-users"
      noDataMessage="No User Found."
      noDataText="Back To All Users"
    />
  );
}
