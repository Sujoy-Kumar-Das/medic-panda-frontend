import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import AllUsersCompo from "./AllUsersCompo";

const AllUserDataHOC = HandleLoadingErrorAndNoData(AllUsersCompo);

export default AllUserDataHOC;
