import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import CategoryCompo from "./CategoryCompo";

const CategoryHOC = HandleLoadingErrorAndNoData(CategoryCompo);

export default CategoryHOC;
