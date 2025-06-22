import { IDashboardStats } from "@/types";

interface useAdminDashboardDataProps {
  title: string;
  value: number;
}

export default function useDashboardStatsData(
  dashboardStats: useAdminDashboardDataProps[],
  backgroundColors: string[]
): IDashboardStats[] {
  return dashboardStats.map((item, index) => ({
    ...item,
    background: backgroundColors[index],
  }));
}
