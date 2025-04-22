import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface ILogoutParams {
  router?: AppRouterInstance;
  path?: string;
}
