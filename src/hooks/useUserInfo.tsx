"use client";
import { authKey } from "@/constants/auth.key";
import getTokenFromCookie from "@/utils/getTokenFromCookie";
import { jwtDecode, JwtPayload } from "jwt-decode";

import { useEffect, useState } from "react";

const useUserInfo = (): any | string => {
  const [userInfo, setUserInfo] = useState<{
    userId: string;
    role: string;
  } | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const authToken = await getTokenFromCookie(authKey);

      if (authToken) {
        const userData: JwtPayload & { userId: string; role: string } =
          jwtDecode(authToken);

        setUserInfo({ userId: userData.userId, role: userData.role });
      } else {
        setUserInfo(null);
      }
    };

    fetchUserInfo();
  }, []);

  return userInfo;
};

export default useUserInfo;
