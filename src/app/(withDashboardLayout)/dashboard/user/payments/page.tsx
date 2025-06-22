"use client";

import { useGetPaymentHistoryQuery } from "@/redux/api";
import PaymentInfoHOC from "./Components/PaymentInfoHOC";

export default function PaymentHistoryPage() {
  const query = useGetPaymentHistoryQuery(undefined);

  return (
    <PaymentInfoHOC
      query={query}
      noDataMessage="Currently you don't have any transaction records"
      noDataLink="/product"
      noDataText="Shop Now"
    />
  );
}
