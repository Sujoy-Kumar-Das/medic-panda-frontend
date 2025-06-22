import AuthContext from "@/context/AuthContext";
import { useGetMeQuery } from "@/redux/api";
import { ILogoutParams } from "@/types";
import { IModifiedUserData } from "@/types/user.type";
import logoutFunc from "@/utils/logoutUser";
import { ReactElement, useEffect, useState } from "react";

const AuthContextProvider = ({ children }: { children: ReactElement }) => {
  const { data, refetch } = useGetMeQuery(undefined);
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

  const loginUser = async () => {
    const newData = await refetch();

    if (newData.data) {
      setUser({
        id: newData?.data?.user?._id,
        name: newData?.data?.name,
        photo: newData?.data?.photo,
        isVerified: newData?.data?.user?.isVerified,
        email: newData?.data?.user?.email,
        role: newData?.data?.user?.role,
        address: newData?.data?.address,
        contact: newData?.data?.contact,
      });
    }
  };

  const logoutUser = async ({ router, path }: ILogoutParams) => {
    logoutFunc({ router, path });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
