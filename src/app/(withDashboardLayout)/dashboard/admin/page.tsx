"use client";

import DashboardItemCard from "@/app/(withDashboardLayout)/dashboard/admin/components/DashboardItemCard";
import { useGetAllProductsQuery } from "@/redux/api/product.api";
import { Container, Grid } from "@mui/material";

export default function AdminDashboardPage() {
  const { data, isLoading } = useGetAllProductsQuery(undefined);

  console.log(data);
  return (
    <Container sx={{ py: 10 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <DashboardItemCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardItemCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardItemCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardItemCard />
        </Grid>
      </Grid>
      {/* <TotalSaleChart /> */}
    </Container>
  );
}
