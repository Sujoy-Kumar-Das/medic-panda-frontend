import { authKey } from "@/constants/auth.key";
import { decodedToken } from "@/utils/jwt";
import getTokenFromCookie from "./getTokenFromCookie";

export const getUserInfo = async () => {
  const authToken = await getTokenFromCookie(authKey);
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role?.toLowerCase(),
      userId: decodedData.userId,
    };
  } else {
    return "";
  }
};