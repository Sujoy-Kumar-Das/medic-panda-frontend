"use client";

import { useSearchParams } from "next/navigation";

export const useQueryParams = () => {
  const searchParams = useSearchParams();

  // Convert searchParams to a plain object
  return Object.fromEntries(searchParams.entries());
};
