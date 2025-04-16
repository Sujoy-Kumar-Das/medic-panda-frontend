import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import PaymentInfoCompo from "./PaymentInfoCompo";

const PaymentInfoHOC = HandleLoadingErrorAndNoData(PaymentInfoCompo);

export default PaymentInfoHOC;
