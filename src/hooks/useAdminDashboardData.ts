import { dashboardBgColor } from "@/style";
import { IDashboardStats } from "@/types";
import { useEffect, useState } from "react";

interface useAdminDashboardDataProps {
  title: string;
  value: number;
}

export default function useAdminDashboardData(
  dashboardStats: useAdminDashboardDataProps[]
) {
  const [dashboardData, setDashboardData] = useState<
    IDashboardStats[] | undefined
  >(undefined);

  useEffect(() => {
    if (dashboardStats) {
      const modifiedData = dashboardStats.map((item, index) => {
        return { ...item, background: dashboardBgColor[index] };
      });

      setDashboardData(modifiedData);
    }
  }, [dashboardStats]);

  return dashboardData;
}
