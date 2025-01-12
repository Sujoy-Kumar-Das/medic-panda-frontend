"use client";
import { useGetAllUsersQuery } from "@/redux/api/user.api";
import { IGenericErrorResponse } from "@/types";
import AllUsersHOC from "./Components/AllUsersHOC";
export default function AllUsersPage() {
  const { data, isLoading, error } = useGetAllUsersQuery(undefined);

  return (
    <AllUsersHOC
      data={data?.result || []}
      isLoading={isLoading}
      error={error as IGenericErrorResponse}
      noDataLink="/dashboard/admin"
      noDataMessage="No User Found."
      noDataText="Go To Dashboard"
    />
  );
}
