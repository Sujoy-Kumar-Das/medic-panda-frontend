import { authKey } from "@/constants/auth.key";
import { ILogoutParams } from "@/types";
import { deleteCookies } from "@/utils/deleteCookies";
import { removeFromLocalStorage } from "./local-storage";

const logoutUser = ({ router, path }: ILogoutParams) => {
  deleteCookies(authKey, "refreshToken");
  removeFromLocalStorage(authKey);

  if (router) {
    router.push(path || "/");
  }
};

export default logoutUser;
