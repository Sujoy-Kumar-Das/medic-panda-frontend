"use client";

import LoadingErrorWrapper from "@/components/shared/loadingErrorWrapper/LoadingErrorWrapper";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useGetAllOrderQuery, useShippingOrderMutation } from "@/redux/api";
import { IOrder } from "@/types";
import { Button, Container, Stack } from "@mui/material";
import OrderCard from "./Components/OrderCard";
import OrderHeader from "./Components/OrderHeader";

export default function OrdersPage() {
  const queryParams = useQueryParams();
  const query = useGetAllOrderQuery(queryParams);

  const [shippingOrder, { error }] = useShippingOrderMutation();

  const handler = async () => {
    shippingOrder(undefined);
  };

  console.log({ error });
  return (
    <Container>
      {/* header and filter */}
      <OrderHeader />

      <Button onClick={handler}>Hit me</Button>

      {/* handle Orders List with loading and error wrapper component */}
      <LoadingErrorWrapper query={query}>
        <Stack spacing={2} sx={{ py: 3 }}>
          {query?.data?.map((orderItem: IOrder) => (
            <OrderCard key={orderItem._id} order={orderItem} />
          ))}
        </Stack>
      </LoadingErrorWrapper>
    </Container>
  );
}
