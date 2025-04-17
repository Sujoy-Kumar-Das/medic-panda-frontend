interface IDashboardStats {
  title: string;
  value: number;
}

const dashboardStatsDataBGGenerator = (
  dashboardStats: IDashboardStats[],
  backgroundColors: string[]
) => {
  return dashboardStats.map((item, index) => ({
    ...item,
    background: backgroundColors[index],
  }));
};

export default dashboardStatsDataBGGenerator;
