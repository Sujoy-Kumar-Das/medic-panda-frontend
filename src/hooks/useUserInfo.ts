"use client";
import { authKey } from "@/constants/auth.key";
import getTokenFromCookie from "@/utils/getTokenFromCookie";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IUser {
  userId: string;
  role: string;
}

interface IUserInfoHook {
  userInfo: IUser | null;
  setUserInfo: Dispatch<SetStateAction<IUser | null>>;
}

const useUserInfo = (): IUserInfoHook => {
  const [userInfo, setUserInfo] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const authToken = await getTokenFromCookie(authKey);

      if (authToken) {
        const userData: JwtPayload & { userId: string; role: string } =
          jwtDecode(authToken);

        // Directly set userInfo without nesting under "user"
        setUserInfo({ userId: userData.userId, role: userData.role });
      } else {
        setUserInfo(null);
      }
    };

    fetchUserInfo();
  }, []);

  return { userInfo, setUserInfo };
};

export default useUserInfo;
