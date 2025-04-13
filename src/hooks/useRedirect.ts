"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function useRedirect({
  pathName = "redirect",
}: { pathName?: string } = {}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get(pathName) || "/";

  return { router, redirect };
}
