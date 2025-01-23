import { authKey } from "@/constants/auth.key";
import AuthContext from "@/context/AuthContext";
import getTokenFromCookie from "@/utils/getTokenFromCookie";
import { jwtDecode, JwtPayload } from "jwt-decode";
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

      if (authToken) {
        const userData: JwtPayload & { userId: string; role: string } =
          jwtDecode(authToken);

        // Directly set userInfo without nesting under "user"
        setUser({ userId: userData.userId, role: userData.role });
      } else {
        setUser(null);
      }
    };

    fetchUserInfo();
  }, []);

  const storeUser = (token: string) => {
    if (!token) setUser(null);

    const decodedData = jwtDecode(token) as JwtPayload & {
      userId: string;
      role: string;
    };

    setUser({ userId: decodedData.userId, role: decodedData.role });
  };

  const clearUser = () => {
    setUser(() => null);
  };

  const authValues = {
    user,
    clearUser,
    storeUser,
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
