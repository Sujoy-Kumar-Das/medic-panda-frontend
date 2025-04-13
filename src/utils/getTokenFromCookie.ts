"use server";

import { cookies } from "next/headers";

const getTokenFromCookie = (key: string) => {
  const value = cookies().get(key)?.value;
  return value || null;
};

export default getTokenFromCookie;
