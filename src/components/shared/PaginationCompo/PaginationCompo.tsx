"use client";
import { Pagination } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
export default function PaginationCompo({ totalPageCount }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  // pagination handler
  const handlePagination = (event: any, page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    if (page) {
      params.set("page", String(page));
    } else {
      params.delete("page");
    }
    replace(`${pathName}?${params.toString()}`);
  };
  return <Pagination count={totalPageCount} onChange={handlePagination} />;
}
