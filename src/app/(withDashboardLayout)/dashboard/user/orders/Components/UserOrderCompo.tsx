"use client";
import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import NoDataFound from "@/components/shared/notFound/NoDataFound";
import useCancelOrder from "@/hooks/useCancelOrder";
import usePayment from "@/hooks/usePayment";
import { IOrder } from "@/types";
import { Container, Stack } from "@mui/material";
import OrderCard from "./OrderCard";
import OrderHeader from "./OrderHeader";

function UserOrderCompo({ data }: { data: { result: IOrder[] } }) {
  const { handlerFunc: handlePayment, isLoading: paymentLoading } =
    usePayment();

  const { handlerFunc, isLoading } = useCancelOrder();

  let content;

  const withData = (
    <Stack spacing={2} sx={{ py: 3 }}>
      {data.result.map((orderItem: IOrder) => (
        <OrderCard
          onCancelOrder={() => handlerFunc(orderItem._id)}
          isLoading={isLoading}
          key={orderItem._id}
          order={orderItem}
          onPayment={() => handlePayment(orderItem._id)}
          isPaymentLoading={paymentLoading}
        />
      ))}
    </Stack>
  );

  const withOutData = (
    <NoDataFound
      message="Currently You Don't Have any order."
      link="/product"
      text="Start Shopping"
    />
  );

  content = data?.result.length === 0 ? withOutData : withData;

  return (
    <Container>
      <OrderHeader />

      {content}
    </Container>
  );
}

const UserOrderHOC = HandleLoadingErrorAndNoData(UserOrderCompo);

export default UserOrderHOC;
