import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import UserDashboardCompo from "./UserDashboardCompo";

const UserDashboardWithHOC = HandleLoadingErrorAndNoData(UserDashboardCompo);

export default UserDashboardWithHOC;
