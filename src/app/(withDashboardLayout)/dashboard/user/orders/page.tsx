"use client";

import ErrorPage from "@/components/shared/error/Error";
import Loader from "@/components/shared/loader/Loader";
import NoDataFound from "@/components/shared/notFound/NoDataFound";
import { useGetAllOrderQuery } from "@/redux/api/order.api";
import { IGenericErrorResponse, IOrder } from "@/types";
import { Container, Stack } from "@mui/material";
import React, { useState } from "react";
import OrderCard from "./Components/OrderCard";
import OrderHeader from "./Components/OrderHeader";

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const { data, isLoading, error } = useGetAllOrderQuery({
    searchTerm,
    ...(statusFilter && { status: statusFilter }),
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (filter: string) => {
    setStatusFilter(filter);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage error={error as IGenericErrorResponse} />;
  }

  return (
    <Container>
      {/* header and filter */}
      <OrderHeader />
      {/* Orders List */}
      {data?.length ? (
        <Stack spacing={2} sx={{ py: 3 }}>
          {data.map((orderItem: IOrder) => (
            <OrderCard key={orderItem._id} order={orderItem} />
          ))}
        </Stack>
      ) : (
        <NoDataFound
          link="/product"
          text="Browse Products"
          message={`You Don't have any ${statusFilter} order.`}
        />
      )}
    </Container>
  );
}
