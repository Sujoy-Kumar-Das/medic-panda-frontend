import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import SecurityCompo from "./SecurityCompo";

const SecurityHOC = HandleLoadingErrorAndNoData(SecurityCompo);

export default SecurityHOC;
