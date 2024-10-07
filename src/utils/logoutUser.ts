import { authKey } from "@/constants/auth.key";
import { deleteCookies } from "@/utils/deleteCookies";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const logoutUser = (router: AppRouterInstance) => {
  deleteCookies(authKey, "refreshToken");
  router.push("/");
  router.refresh();
};

export default logoutUser;
