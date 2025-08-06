"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const getParam = (key: string) => {
    const value = searchParams.get(key);
    return value ?? "";
  };
  const search = (queries: Record<string, string | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(queries).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    const newQueryString = params.toString();
    replace(newQueryString ? `${pathName}?${newQueryString}` : pathName);
  };

  const clearSearch = () => {
    replace(pathName);
  };

  return { search, getParam, clearSearch };
}
