"use client";
import usePagination from "@/hooks/usePagination";
import { Pagination } from "@mui/material";

export default function PaginationCompo({
  totalPageCount,
}: {
  totalPageCount: number | undefined;
}) {
  const { handlerFunc, currentPage } = usePagination();

  return (
    <Pagination
      page={currentPage}
      count={totalPageCount}
      onChange={handlerFunc}
    />
  );
}
