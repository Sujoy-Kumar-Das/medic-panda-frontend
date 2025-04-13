import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import PlaceOrderCompo from "./PlaceOrderCompo";

const PlaceOrderHOC = HandleLoadingErrorAndNoData(PlaceOrderCompo);

export default PlaceOrderHOC;
