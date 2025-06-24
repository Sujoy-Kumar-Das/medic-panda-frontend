import Header from "@/components/shared/header/Header";
import DashboardStatsGrid from "@/components/ui/card/DashboardStatsGrid";
import { IDashboardStats } from "@/types";
import { Container } from "@mui/material";

interface AdminDashboardCompoProps {
  dashboardStats: IDashboardStats[];
}

export default function AdminDashboardCompo({
  data,
}: {
  data: AdminDashboardCompoProps;
}) {
  return (
    <Container sx={{ pb: 4 }}>
      <Header
        title="Admin Dashboard Overview"
        subtitle="View Key Metrics and Track Your Store’s Performance"
      />

      <DashboardStatsGrid data={data.dashboardStats} />
    </Container>
  );
}
