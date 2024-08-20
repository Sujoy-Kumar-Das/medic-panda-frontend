import { ReactNode } from "react";
import { IUserRoles } from "./user.role.type";

export interface IDashboardRoute {
  text: string;
  link: string;
  icon: ReactNode;
  access?: IUserRoles[];
}
