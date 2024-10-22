"use client";
import { useGetPaymentHistoryQuery } from "@/redux/api/payment.api";
import { IGenericErrorResponse } from "@/types";
import PaymentInfoHOC from "./Components/PaymentInfoHOC";

export default function PaymentHistoryPage() {
  const { data, isLoading, error } = useGetPaymentHistoryQuery(undefined);

  return (
    <PaymentInfoHOC
      data={data}
      isLoading={isLoading}
      error={error as IGenericErrorResponse}
    />
  );
}
