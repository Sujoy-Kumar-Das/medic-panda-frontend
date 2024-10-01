"use client";

import ErrorPage from "@/components/shared/error/Error";
import Header from "@/components/shared/header/Header";
import Loader from "@/components/shared/loader/Loader";
import NoDataFound from "@/components/shared/notFound/NoDataFound";
import { useGetAllOrderQuery } from "@/redux/api/order.api";
import { IGenericErrorResponse } from "@/types";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import OrderCard from "./Components/OrderCard";

export default function OrdersPage() {
  const { data, isLoading, error } = useGetAllOrderQuery(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
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

  if (!data?.length) {
    return (
      <NoDataFound
        link="/product"
        text="Browse Products"
        message="No returned orders found at the moment."
      />
    );
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
        {statusFilter === "all" ? (
          <Typography variant="h4" color="text.secondary">
            Viewing All Orders
          </Typography>
        ) : (
          <Typography variant="h4" color="text.secondary">
            Searching for {statusFilter} orders
          </Typography>
        )}

        {/* Enhanced Search Bar */}
        <Box flex={1} width="100%">
          <TextField
            placeholder="Search Orders"
            value={searchTerm}
            onChange={handleSearchChange}
            fullWidth
            variant="outlined"
            sx={{
              borderRadius: "12px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#ccc",
                },
                "&:hover fieldset": {
                  borderColor: "#999",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#666",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleOpenFilterMenu}>
                    <FilterListIcon color="primary" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
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
        <MenuItem onClick={() => handleFilterChange("all")}>
          All Orders
        </MenuItem>
        <MenuItem onClick={() => handleFilterChange("pending")}>
          Pending
        </MenuItem>
        <MenuItem onClick={() => handleFilterChange("completed")}>
          Completed
        </MenuItem>
        <MenuItem onClick={() => handleFilterChange("cancelled")}>
          Cancelled
        </MenuItem>
      </Menu>

      {/* Orders List */}
      <Stack spacing={2} sx={{ mt: 3 }}>
        {data.map((orderItem) => (
          <OrderCard key={orderItem._id} order={orderItem} />
        ))}
      </Stack>
    </Container>
  );
}
