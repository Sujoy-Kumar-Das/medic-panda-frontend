"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function usePagination() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Update state when URL changes
  useEffect(() => {
    const page = Number(searchParams.get("page")) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  // Pagination handler
  const handlerFunc = (_event: any, page: number) => {
    if (currentPage === page) return; // Prevent unnecessary re-renders

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));

    setCurrentPage(page); // Ensure UI updates
    replace(`${pathName}?${params.toString()}`);
  };

  return { handlerFunc, currentPage };
}
