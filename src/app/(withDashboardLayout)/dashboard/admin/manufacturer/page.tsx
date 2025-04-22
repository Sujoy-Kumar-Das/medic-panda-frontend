"use client";

import { useQueryParams } from "@/hooks/useQueryParams";
import { useGetAllManufactureQuery } from "@/redux/api";
import ManufacturerHOC from "./ManufacturerHOC";

export default function ManufacturerPage() {
  const queryParams = useQueryParams();
  const query = useGetAllManufactureQuery(queryParams);

  return (
    <ManufacturerHOC
      query={query}
      noDataMessage="No Manufacturer Found"
      noDataText="Back To Manufacturer Page"
    />
  );
}
