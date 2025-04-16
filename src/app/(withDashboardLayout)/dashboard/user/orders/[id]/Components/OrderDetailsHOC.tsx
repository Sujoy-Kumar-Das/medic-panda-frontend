"use client";
import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import UserOrderDetailsCompo from "./UserOrderDetailsCompo";

// OrderDetailsWithHOC
const OrderDetailsWithHOC = HandleLoadingErrorAndNoData(UserOrderDetailsCompo);

export default OrderDetailsWithHOC;
