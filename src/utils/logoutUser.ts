"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const logoutUserFunc = async (
  router?: AppRouterInstance,
  redirectPath: string = "/"
) => {
  const res = await fetch(`/api/proxy/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) {
    const error = await res.json();
    console.error("Logout failed:", error);
    return;
  }

  router ? router.push(redirectPath) : (window.location.href = redirectPath);
};
