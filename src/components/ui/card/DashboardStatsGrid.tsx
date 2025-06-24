import { dashboardStatsCardContainerVariants } from "@/lib/framer-motion/card-animation";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import DashboardStatsCard from "./DashboardStatsCard";

interface DashboardStatsGridProps {
  data: {
    title: string;
    value: string | number;
  }[];
}

export default function DashboardStatsGrid({ data }: DashboardStatsGridProps) {
  return (
    <Grid
      component={motion.div}
      variants={dashboardStatsCardContainerVariants}
      initial="hidden"
      animate="visible"
      container
      spacing={3}
      pb={3}
    >
      {data?.map((card: any, index: number) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <DashboardStatsCard title={card.title} value={card.value} />
        </Grid>
      ))}
    </Grid>
  );
}
