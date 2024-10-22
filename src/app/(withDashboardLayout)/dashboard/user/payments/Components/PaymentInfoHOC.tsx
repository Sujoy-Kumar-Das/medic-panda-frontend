import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import Header from "@/components/shared/header/Header";
import { Container, Stack } from "@mui/material";
import PaymentCard from "./PaymentCard";

function PaymentInfoCompo({ data: paymentHistories }: { data: any }) {
  return (
    <Container>
      <Header
        title="Payment History"
        subtitle="View and track all your past transactions and payment details in one place."
      />

      <Stack>
        {paymentHistories?.map((paymentHistory: any) => (
          <PaymentCard
            key={paymentHistory._id}
            paymentHistory={paymentHistory}
          />
        ))}
      </Stack>
    </Container>
  );
}

const PaymentInfoHOC = HandleLoadingErrorAndNoData(PaymentInfoCompo);

export default PaymentInfoHOC;
