"use server";

import { FieldValues } from "react-hook-form";

export const createUser = async (userInfo: FieldValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_base_url_local}/user/customer`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
      cache: "no-store",
    }
  );
  const userData = await res.json();

  return userData;
};
