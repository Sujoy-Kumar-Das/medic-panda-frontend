import { useGetMeQuery } from "@/redux/api/myProfile.api";
import { IModifiedUserData } from "@/types/user.type";
import { useEffect, useState } from "react";

export default function useGetMe() {
  const { data, ...apiResponse } = useGetMeQuery(undefined);

  const [user, setUser] = useState<IModifiedUserData | null>(null);

  useEffect(() => {
    const modifiedData = {
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

  return { user, ...apiResponse };
}
