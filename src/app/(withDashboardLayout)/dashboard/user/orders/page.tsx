"use client";

import LoadingErrorWrapper from "@/components/shared/loadingErrorWrapper/LoadingErrorWrapper";
import { useGetAllOrderQuery } from "@/redux/api/order.api";
import { IOrder } from "@/types";
import { Container, Stack } from "@mui/material";
import OrderCard from "./Components/OrderCard";
import OrderHeader from "./Components/OrderHeader";
import { useQueryParams } from "@/hooks/useQueryParams";

export default function OrdersPage() {
  const queryParams = useQueryParams();
  const query = useGetAllOrderQuery(queryParams);

  return (
    <Container>
      {/* header and filter */}
      <OrderHeader />

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
