"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const logoutUserFunc = async (
  router: AppRouterInstance,
  redirectPath: string = "/"
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_base_url_local}/auth/logout`,
    {
      method: "POST",
      credentials: "include",
    }
  );

  if (!res.ok) {
    const error = await res.json();
    console.error("Logout failed:", error);
    return;
  }

  router.push(redirectPath);
};
