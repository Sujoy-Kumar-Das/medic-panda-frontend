import { authKey } from "@/constants/auth.key";
import AuthContext from "@/context/AuthContext";
import { deleteCookies } from "@/utils/deleteCookies";
import getTokenFromCookie from "@/utils/getTokenFromCookie";
import logoutFunc from "@/utils/logoutUser";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReactElement, useEffect, useState } from "react";
interface IUser {
  userId: string;
  role: string;
}

const AuthContextProvider = ({ children }: { children: ReactElement }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const authToken = await getTokenFromCookie(authKey);

      if (!authToken) {
        setUser(null);
        return;
      }

      try {
        const userData = jwtDecode(authToken) as JwtPayload & {
          userId: string;
          role: string;
        };
        setUser({ userId: userData.userId, role: userData.role });
      } catch (error) {
        setUser(null);
        deleteCookies(authKey);
      }
    };

    fetchUserInfo();
  }, []);

  const loginUser = (token: string) => {
    if (!token) setUser(null);

    const decodedData = jwtDecode(token) as JwtPayload & {
      userId: string;
      role: string;
    };

    setUser({ userId: decodedData.userId, role: decodedData.role });
  };

  const logoutUser = (router: AppRouterInstance) => {
    setUser(null);
    logoutFunc(router);
  };

  const authValues = {
    user,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
