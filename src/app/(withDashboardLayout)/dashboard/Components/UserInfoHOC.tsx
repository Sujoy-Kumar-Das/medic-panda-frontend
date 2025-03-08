import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import UserInfoCompo from "./UserInfoCompo";

const UserInfoHOC = HandleLoadingErrorAndNoData(UserInfoCompo);

export default UserInfoHOC;
