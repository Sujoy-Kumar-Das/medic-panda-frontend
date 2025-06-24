import { dashboardStatsCardVariants } from "@/lib/framer-motion/card-animation";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function DashboardStatsCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <Box
      component={motion.div}
      variants={dashboardStatsCardVariants}
      whileHover={{ scale: 1.03 }}
      sx={{
        background: "linear-gradient(135deg, #007bff, #00c8ff)",
        p: 3,
        borderRadius: 4,
        boxShadow: 3,
        color: "white",
        minHeight: "180px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: "-50%",
          right: "-50%",
          width: "200%",
          height: "200%",
          transform: "rotate(30deg)",
          transition: "all 0.5s ease",
        },
        "&:hover:before": {
          transform: "rotate(30deg) translate(20px, 20px)",
        },
      }}
    >
      <Box>
        <Typography
          variant="subtitle1"
          textAlign={"left"}
          sx={{
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontWeight: 500,
            opacity: 0.9,
            mb: 1,
            fontSize: "0.85rem",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          textAlign={"left"}
          sx={{
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 1,
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
}
