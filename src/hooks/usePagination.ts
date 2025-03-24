import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function usePagination() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  // pagination handler
  const handlerFunc = (event: any, page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    setCurrentPage(page);
    if (page) {
      params.set("page", String(page));
    } else {
      params.delete("page");
    }
    replace(`${pathName}?${params.toString()}`);
  };

  useEffect(() => {
    const page = searchParams.get("page");

    if (page) {
      setCurrentPage(Number(page));
    } else {
      setCurrentPage(1);
    }
  }, [searchParams]);

  return { handlerFunc, currentPage };
}
