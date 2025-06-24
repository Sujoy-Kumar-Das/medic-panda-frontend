import AuthContext from "@/context/AuthContext";
import { useGetMeQuery } from "@/redux/api";
import { ILogoutParams } from "@/types";
import { IModifiedUserData } from "@/types/user.type";
import { logoutUserFunc } from "@/utils/logoutUser";
import modifyUserData from "@/utils/modify-user-data";
import { useRouter } from "next/navigation";
import { ReactElement, useCallback, useEffect, useState } from "react";

const AuthContextProvider = ({ children }: { children: ReactElement }) => {
  const { data, refetch, error } = useGetMeQuery(undefined);
  const [user, setUser] = useState<IModifiedUserData | null>(null);

  const router = useRouter();

  useEffect(() => {
    setUser(data ? modifyUserData(data) : null);
  }, [data]);

  const loginUser = useCallback(async () => {
    const newData = await refetch();

    console.log({ newData });

    setUser(newData.data ? modifyUserData(newData.data) : null);
  }, [refetch]);

  const logoutUser = useCallback(
    async ({ redirectPath }: ILogoutParams) => {
      await logoutUserFunc(router, redirectPath);
      setUser(null);
    },
    [router]
  );

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
