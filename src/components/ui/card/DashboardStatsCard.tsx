import { IDashboardStats } from "@/types";
import { Card, CardContent, Typography } from "@mui/material";

interface DashboardStatsCardProps {
  stats: IDashboardStats;
}

export default function DashboardStatsCard({ stats }: DashboardStatsCardProps) {
  return (
    <Card
      sx={{
        background: stats.background,
        height: 150,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        },
        flex: 1,
        minWidth: "200px",
      }}
    >
      <CardContent>
        <Typography variant="h6" align="center" color="white">
          {stats.title}
        </Typography>
        <Typography variant="h4" fontWeight="bold" align="center" color="white">
          {stats.value}
        </Typography>
      </CardContent>
    </Card>
  );
}
