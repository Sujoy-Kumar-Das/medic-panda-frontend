import { useGetMeQuery } from "@/redux/api/myProfile.api";
import { IModifiedUserData } from "@/types/user.type";
import { useEffect, useState } from "react";

export default function useAuthUser() {
  const { data, refetch } = useGetMeQuery(undefined);

  const [user, setUser] = useState<IModifiedUserData | null>(null);

  useEffect(() => {
    if (!data) {
      setUser(null);
      return;
    }
    const modifiedData: IModifiedUserData = {
      id: data?._id,
      name: data?.name,
      photo: data?.photo,
      isVerified: data?.isVerified,
      email: data?.email,
      role: data?.role,
      address: data?.address,
      contact: data?.contact,
    };

    setUser(modifiedData);
  }, [data]);

  return { user, setUser, refetch };
}
