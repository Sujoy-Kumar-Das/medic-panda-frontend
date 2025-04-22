"use client";

import { useGetPaymentHistoryQuery } from "@/redux/api";
import PaymentInfoHOC from "./Components/PaymentInfoHOC";

export default function PaymentHistoryPage() {
  const query = useGetPaymentHistoryQuery(undefined);

  return <PaymentInfoHOC query={query} />;
}
