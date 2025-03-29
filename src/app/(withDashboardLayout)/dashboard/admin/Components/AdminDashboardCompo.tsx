import Header from "@/components/shared/header/Header";
import useAdminDashboardData from "@/hooks/useAdminDashboardData";
import { IDashboardStats } from "@/types";
import { Container } from "@mui/material";
import AdminDashboardStatsCompo from "./AdminDashboardStatsCompo";

interface AdminDashboardCompoProps {
  dashboardStats: IDashboardStats[];
}

export default function AdminDashboardCompo({
  data,
}: {
  data: AdminDashboardCompoProps;
}) {
  const dashboardStatsData = useAdminDashboardData(data.dashboardStats);

  return (
    <Container sx={{ pb: 4 }}>
      <Header
        title="E-commerce Analytics Dashboard"
        subtitle="View Key Metrics and Track Your Store’s Performance"
      />
      <AdminDashboardStatsCompo dashboardStats={dashboardStatsData} />
    </Container>
  );
}
