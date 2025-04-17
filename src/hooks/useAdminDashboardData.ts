import { IDashboardStats } from "@/types";
import { useEffect, useState } from "react";

interface useAdminDashboardDataProps {
  title: string;
  value: number;
}

export default function useDashboardStatsData(
  dashboardStats: useAdminDashboardDataProps[],
  backgroundColors: string[]
) {
  const [dashboardData, setDashboardData] = useState<
    IDashboardStats[] | undefined
  >(undefined);

  useEffect(() => {
    if (dashboardStats) {
      const modifiedData = dashboardStats.map((item, index) => {
        return { ...item, background: backgroundColors[index] };
      });

      setDashboardData(modifiedData);
    }
  }, [dashboardStats]);

  return dashboardData;
}
