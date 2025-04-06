"use server";

import { cookies } from "next/headers";

const getTokenFromCookie = (key: string) => {
  return cookies().get(key)?.value;
};

export default getTokenFromCookie;
