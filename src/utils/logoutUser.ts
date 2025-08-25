"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

export const logoutUserFunc = async (
  router?: AppRouterInstance,
  redirectPath: string = "/"
) => {
  const res = await fetch(`/api/proxy/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) {
    return;
  }

  router ? router.push(redirectPath) : (window.location.href = redirectPath);
};
