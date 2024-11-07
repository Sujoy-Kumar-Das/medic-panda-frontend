"use client";

import ErrorPage from "@/components/shared/error/Error";
import Header from "@/components/shared/header/Header";
import Loader from "@/components/shared/loader/Loader";
import NoDataFound from "@/components/shared/notFound/NoDataFound";
import useSocket from "@/hooks/useSocket";
import { useGetAllOrderQuery } from "@/redux/api/order.api";
import { IGenericErrorResponse, IOrder } from "@/types";
import { Container, Stack } from "@mui/material";
import React, { useState } from "react";
import FilterCompo from "./Components/FilterCompo";
import OrderCard from "./Components/OrderCard";

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const { data, isLoading, error, refetch } = useGetAllOrderQuery({
    searchTerm,
    ...(statusFilter && { status: statusFilter }),
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (filter: string) => {
    setStatusFilter(filter);
  };

  // Use the custom socket hook
  useSocket(["order"], () => {
    refetch();
  });

  console.log(data?.length);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage error={error as IGenericErrorResponse} />;
  }

  return (
    <Container>
      <Header
        title="Your Orders"
        subtitle="Manage your orders, track their status, and view details for each transaction."
      />

      {/* Filter Options */}
      <FilterCompo
        selectedFilter={statusFilter}
        onFilterChange={handleFilterChange}
      />

      {/* Orders List */}
      {data?.length ? (
        <Stack spacing={2} sx={{ mt: 3 }}>
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
