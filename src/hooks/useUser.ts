"use client";
import { useGetMeQuery } from "@/redux/api";
import { IModifiedUserData } from "@/types/user.type";
import { useEffect, useState } from "react";

export default function useUser() {
  const { data, ...apiResponse } = useGetMeQuery(undefined);
  const [user, setUser] = useState<IModifiedUserData | null>(null);

  useEffect(() => {
    if (!data) {
      setUser(null);
      return;
    }

    const modifiedData: IModifiedUserData = {
      id: data?.user?._id,
      name: data?.name,
      photo: data?.photo,
      isVerified: data?.user?.isVerified,
      email: data?.user?.email,
      role: data?.user?.role,
      address: data?.address,
      contact: data?.contact,
    };

    setUser(modifiedData);
  }, [data]);

  return { user, setUser, ...apiResponse };
}
