import Header from "@/components/shared/header/Header";
import { adminDashboardBgColor } from "@/style";
import { IDashboardStats } from "@/types";
import dashboardStatsDataBGGenerator from "@/utils/dashboard-stats-data-bg-generator";
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
  const dashboardStatsData = dashboardStatsDataBGGenerator(
    data.dashboardStats,
    adminDashboardBgColor
  );

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
