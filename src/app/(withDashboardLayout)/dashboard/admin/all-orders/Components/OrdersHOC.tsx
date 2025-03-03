import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import OrdersCompo from "./OrdersCompo";

const OrdersHOC = HandleLoadingErrorAndNoData(OrdersCompo);

export default OrdersHOC;
