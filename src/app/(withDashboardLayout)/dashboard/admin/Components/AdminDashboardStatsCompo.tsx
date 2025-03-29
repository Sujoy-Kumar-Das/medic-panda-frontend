import DashboardStatsCard from "@/components/ui/card/DashboardStatsCard";
import { IDashboardStats } from "@/types";
import randomUID from "@/utils/randomId";
import { Stack } from "@mui/material";

interface DashboardStatsCompoProps {
  dashboardStats: IDashboardStats[] | undefined;
}

export default function AdminDashboardStatsCompo({
  dashboardStats,
}: DashboardStatsCompoProps) {
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={4}>
      {dashboardStats?.map((item) => (
        <DashboardStatsCard stats={item} key={randomUID()} />
      ))}
    </Stack>
  );
}
