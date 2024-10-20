"use client";

import ErrorPage from "@/components/shared/error/Error";
import Header from "@/components/shared/header/Header";
import Loader from "@/components/shared/loader/Loader";
import NoDataFound from "@/components/shared/notFound/NoDataFound";
import { useGetAllOrderQuery } from "@/redux/api/order.api";
import {
  IGenericErrorResponse,
  IOrder,
  IOrderDetails,
  OrderStatus,
} from "@/types";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Button,
  Container,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import OrderCard from "./Components/OrderCard";

const filterItems = [
  { title: "all", value: "" },
  { title: OrderStatus.PENDING, value: OrderStatus.PENDING },
  { title: OrderStatus.PAID, value: OrderStatus.PAID },
  { title: OrderStatus.PROCESSING, value: OrderStatus.PROCESSING },
  { title: OrderStatus.SHIPPED, value: OrderStatus.SHIPPED },
  { title: OrderStatus.DELIVERED, value: OrderStatus.DELIVERED },
  { title: OrderStatus.CANCELED, value: OrderStatus.CANCELED },
  { title: OrderStatus.RETURNED, value: OrderStatus.RETURNED },
];

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const { data, isLoading, error } = useGetAllOrderQuery({
    searchTerm,
    ...(statusFilter && { status: statusFilter }),
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (filter: string) => {
    setStatusFilter(filter);
    handleCloseFilterMenu();
  };

  const handleOpenFilterMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseFilterMenu = () => {
    setAnchorEl(null);
  };

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

      {/* Search and Filter Section */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          padding: "20px",
          borderRadius: "16px",
          bgcolor: "transparent",
        }}
      >
        <Typography
          variant="h4"
          color="text.secondary"
          textTransform={"capitalize"}
        >
          {statusFilter} Orders
        </Typography>

        {/*  Search Bar */}
        <Button onClick={handleOpenFilterMenu} endIcon={<FilterListIcon />}>
          Filter
        </Button>
      </Stack>

      {/* Filter Options */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseFilterMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {filterItems.map((item) => (
          <MenuItem
            key={item.value}
            onClick={() => handleFilterChange(item.value)}
            sx={{ textTransform: "capitalize" }}
          >
            {item.title}
          </MenuItem>
        ))}
      </Menu>

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
