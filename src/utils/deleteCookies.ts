"use server";

import { cookies } from "next/headers";

export const deleteCookies = (...keys: string[]) => {
  const cookieStore = cookies();

  keys.forEach((key) => {
    cookieStore.set(key, "", { expires: new Date(0) });
  });
};
