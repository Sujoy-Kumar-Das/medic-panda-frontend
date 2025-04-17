import AuthContext from "@/context/AuthContext";
import useUser from "@/hooks/useUser";
import logoutFunc from "@/utils/logoutUser";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReactElement } from "react";

const AuthContextProvider = ({ children }: { children: ReactElement }) => {
  const { user, setUser, refetch } = useUser();

  const loginUser = async () => {
    const newData = await refetch();

    if (newData.data) {
      setUser({
        id: newData?.data?._id,
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

  const logoutUser = async (router: AppRouterInstance) => {
    logoutFunc(router);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
