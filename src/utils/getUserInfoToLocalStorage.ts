import { authKey } from "@/constants/auth.key";
import { jwtDecode } from "jwt-decode";
import { getFromLocalStorage } from "./local-storage";

const getUserInfoToLocalStorage = () => {
  const userInfo = getFromLocalStorage(authKey);

  if (!userInfo) {
    return "";
  }

  return jwtDecode(userInfo) as { userId: string; role: string };
};

export default getUserInfoToLocalStorage;
