"use client";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useGetAllUsersQuery } from "@/redux/api/user.api";
import HandleUserDataHOC from "./Components/handleUserDataHOC/HandleUserDataHOC";
export default function AllUsersPage() {
  const queryParams = useQueryParams();
  const query = useGetAllUsersQuery(queryParams);

  return (
    <HandleUserDataHOC
      query={query}
      noDataLink="/dashboard/admin/all-users"
      noDataMessage="No User Found."
      noDataText="Back To All Users"
    />
  );
}
