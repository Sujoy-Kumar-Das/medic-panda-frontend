"use client";
import { authKey } from "@/constants/auth.key";
import Cookies from "js-cookie";
import { jwtDecode, JwtPayload } from "jwt-decode";

import { useEffect, useState } from "react";

const useUserInfo = (): any | string => {
  const [userInfo, setUserInfo] = useState<{
    user: string;
    role: string;
  } | null>(null);

  useEffect(() => {
    const fetchUserInfo = () => {
      const authToken = Cookies.get(authKey);
      if (authToken) {
        const userData: JwtPayload & { userId: string; role: string } =
          jwtDecode(authToken);

        setUserInfo({ user: userData.userId, role: userData.role });
      } else {
        setUserInfo(null);
      }
    };

    fetchUserInfo();
  }, []);

  return userInfo;
};

export default useUserInfo;
