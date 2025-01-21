import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import AllUsersCompo from "./AllUsersCompo";

const HandleUserDataHOC = HandleLoadingErrorAndNoData(AllUsersCompo);

export default HandleUserDataHOC;
