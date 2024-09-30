"use client";
import ErrorPage from "@/components/shared/error/Error";
import Header from "@/components/shared/header/Header";
import Loader from "@/components/shared/loader/Loader";
import { useGetPaymentHistoryQuery } from "@/redux/api/payment.api";
import { IGenericErrorResponse } from "@/types";
import { Container, Stack } from "@mui/material";
import PaymentCard from "./Components/PaymentCard";

export default function PaymentHistoryPage() {
  const {
    data: paymentHistories,
    isLoading,
    error,
  } = useGetPaymentHistoryQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage error={error as IGenericErrorResponse} />;
  }

  return (
    <Container>
      <Header
        title="Payment History"
        subtitle="View and track all your past transactions and payment details in one place."
      />

      <Stack>
        {paymentHistories?.map((paymentHistory) => (
          <PaymentCard
            key={paymentHistory._id}
            paymentHistory={paymentHistory}
          />
        ))}
      </Stack>
    </Container>
  );
}
