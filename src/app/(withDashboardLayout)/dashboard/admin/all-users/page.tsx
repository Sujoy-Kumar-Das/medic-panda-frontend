"use client";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useGetAllUsersQuery } from "@/redux/api/user.api";
import { IGenericErrorResponse } from "@/types";
import AllUsersHOC from "./Components/AllUsersHOC";
export default function AllUsersPage() {
  const queryParams = useQueryParams();
  const { data, isLoading, error } = useGetAllUsersQuery(queryParams);

  return (
    <AllUsersHOC
      data={data?.result || []}
      isLoading={isLoading}
      error={error as IGenericErrorResponse}
      noDataLink="/dashboard/admin/all-users"
      noDataMessage="No User Found."
      noDataText="Back To All Users"
    />
  );
}
