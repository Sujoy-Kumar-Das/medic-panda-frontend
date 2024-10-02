import { authKey } from "@/constants/auth.key";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { deleteCookies } from "./deleteCookies";

const logoutUser = (router: AppRouterInstance) => {
  deleteCookies(authKey, "refreshToken");
  router.push("/");
  router.refresh();
};

export default logoutUser;
