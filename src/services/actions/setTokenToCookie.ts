"use server";

import { cookies } from "next/headers";
const setTokenToCookie = (key: string, token: string) => {
  cookies().set(key, token);
};

export default setTokenToCookie;
