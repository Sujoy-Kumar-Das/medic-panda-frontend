import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import MyCartCompo from "./MyCartCompo";

const MyCartWithHOC = HandleLoadingErrorAndNoData(MyCartCompo);

export default MyCartWithHOC;
