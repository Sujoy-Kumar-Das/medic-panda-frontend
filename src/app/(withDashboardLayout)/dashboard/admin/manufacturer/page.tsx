"use client";

import LoadingErrorWrapper from "@/components/shared/loadingErrorWrapper/LoadingErrorWrapper";
import { useGetAllManufactureQuery } from "@/redux/api/manufacture.api";
import { Container } from "@mui/material";
import ManufacturerHeader from "./ManufacturerHeader";

export default function ManufacturerPage() {
  const { data, ...query } = useGetAllManufactureQuery(undefined);

  return (
    <LoadingErrorWrapper query={query}>
      <Container>
        <ManufacturerHeader />
      </Container>
    </LoadingErrorWrapper>
  );
}
