"use client";
import { useGetPaymentHistoryQuery } from "@/redux/api/payment.api";
import PaymentInfoHOC from "./Components/PaymentInfoHOC";

export default function PaymentHistoryPage() {
  const query = useGetPaymentHistoryQuery(undefined);

  return <PaymentInfoHOC query={query} />;
}
