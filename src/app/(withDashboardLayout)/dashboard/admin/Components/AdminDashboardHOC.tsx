import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import AdminDashboardCompo from "./AdminDashboardCompo";

const AdminDashboardHOC = HandleLoadingErrorAndNoData(AdminDashboardCompo);

export default AdminDashboardHOC;
