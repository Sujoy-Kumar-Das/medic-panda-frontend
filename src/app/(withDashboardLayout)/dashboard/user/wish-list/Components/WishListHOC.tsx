import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import WishListCompo from "./WishListCompo";

const WishListProductWithHOC = HandleLoadingErrorAndNoData(WishListCompo);

export default WishListProductWithHOC;
