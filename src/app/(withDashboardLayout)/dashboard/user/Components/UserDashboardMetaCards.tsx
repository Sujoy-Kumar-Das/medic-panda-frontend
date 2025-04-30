import {
  dashboardStatsCardContainerVariants,
  dashboardStatsCardVariants,
} from "@/lib/framer-motion/card-animation";
import { userDashboardBGColors } from "@/style";
import dashboardStatsDataBGGenerator from "@/utils/dashboard-stats-data-bg-generator";
import { Grid } from "@mui/material";
import { motion } from "motion/react";
import UserDashboardCard from "./UserDashboardCard";

export default function UserDashboardMetaCards({ data }: { data: any }) {
  const userMetaData = dashboardStatsDataBGGenerator(
    data,
    userDashboardBGColors
  );

  return (
    <motion.div
      variants={dashboardStatsCardContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <Grid container spacing={3} pb={3}>
        {userMetaData?.map((card: any, index: number) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div variants={dashboardStatsCardVariants}>
              <UserDashboardCard
                title={card.title}
                value={card.value}
                background={card.background}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
}
