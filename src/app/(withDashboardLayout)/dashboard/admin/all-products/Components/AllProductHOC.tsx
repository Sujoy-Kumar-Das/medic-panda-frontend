import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import AllProductsCompo from "./AllProductsCompo";

const AllProductsHOC = HandleLoadingErrorAndNoData(AllProductsCompo);

export default AllProductsHOC;
