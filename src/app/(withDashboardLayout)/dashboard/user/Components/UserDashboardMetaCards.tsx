import {
  dashboardStatsCardContainerVariants,
  dashboardStatsCardVariants,
} from "@/lib/framer-motion/card-animation";
import { userDashboardBGColors } from "@/style";
import dashboardStatsDataBGGenerator from "@/utils/dashboard-stats-data-bg-generator";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import UserDashboardCard from "./UserDashboardCard";

export default function UserDashboardMetaCards({ data }: { data: any }) {
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
          <UserDashboardCard title={card.title} value={card.value} />
        </Grid>
      ))}
    </Grid>
  );
}
