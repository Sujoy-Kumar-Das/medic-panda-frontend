"use client";

import { useGetAllManufactureQuery } from "@/redux/api/manufacture.api";
import ManufacturerHOC from "./ManufacturerHOC";

export default function ManufacturerPage() {
  const query = useGetAllManufactureQuery(undefined);

  return <ManufacturerHOC query={query} />;
}
