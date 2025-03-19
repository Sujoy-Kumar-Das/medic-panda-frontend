"use client";

import LoadingErrorWrapper from "@/components/shared/loadingErrorWrapper/LoadingErrorWrapper";
import { useGetAllManufactureQuery } from "@/redux/api/manufacture.api";

export default function ManufacturerPage() {
  const { data, ...query } = useGetAllManufactureQuery(undefined);

  return (
    <LoadingErrorWrapper query={query}>
      <h1>Hello world</h1>
    </LoadingErrorWrapper>
  );
}
