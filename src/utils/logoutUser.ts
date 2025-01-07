import { authKey } from "@/constants/auth.key";
import { deleteCookies } from "@/utils/deleteCookies";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { removeFromLocalStorage } from "./local-storage";
import useUserInfo from "@/hooks/useUserInfo";

const logoutUser = (router: AppRouterInstance) => {
  deleteCookies(authKey, "refreshToken");
  removeFromLocalStorage(authKey);
  router.push("/");
  router.refresh();
};

export default logoutUser;
