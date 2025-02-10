import { IDashboardRoute } from "@/types";
import { IUserRoles } from "@/types/user.role.type";

const routeGenerator = (
  routesPaths: IDashboardRoute[],
  role: IUserRoles | undefined
) => {
  return routesPaths.reduce((acc: IDashboardRoute[], item: IDashboardRoute) => {
    if (item.access?.includes(role)) {
      acc.push({ text: item.text, link: item.link, icon: item.icon });
    }
    return acc;
  }, []);
};

export default routeGenerator;
