import { IRoutePath } from "@/types";

const routeGenerator = (routesPaths: IRoutePath[], role: string) => {
  return routesPaths.reduce((acc: IRoutePath[], item: IRoutePath) => {
    if (item.access === role || item.access === "all") {
      acc.push({ text: item.text, link: item.link, icon: item.icon });
    }
    return acc;
  }, []);
};

export default routeGenerator;
