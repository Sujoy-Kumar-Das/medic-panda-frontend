import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import ManufacturerCompo from "./ManufacturerCompo";

const ManufacturerHOC = HandleLoadingErrorAndNoData(ManufacturerCompo);

export default ManufacturerHOC;
