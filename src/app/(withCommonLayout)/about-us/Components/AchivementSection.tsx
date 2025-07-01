import {
  LocalPharmacy as LocalPharmacyIcon,
  LocationCity as LocationCityIcon,
  People as PeopleIcon,
  SupportAgent as SupportAgentIcon,
} from "@mui/icons-material";
import { Box, Grid, Paper, Typography } from "@mui/material";

const achievements = [
  {
    id: 1,
    value: "5M+",
    label: "Happy Customers",
    icon: <PeopleIcon fontSize="large" color="primary" />,
  },
  {
    id: 2,
    value: "50K+",
    label: "Medicines Available",
    icon: <LocalPharmacyIcon fontSize="large" color="primary" />,
  },
  {
    id: 3,
    value: "500+",
    label: "Cities Served",
    icon: <LocationCityIcon fontSize="large" color="primary" />,
  },
  {
    id: 4,
    value: "24/7",
    label: "Customer Support",
    icon: <SupportAgentIcon fontSize="large" color="primary" />,
  },
];

export default function AchievementsSection() {
  return (
    <Box mb={8} sx={{ maxWidth: "lg", mx: "auto" }}>
      <Typography
        variant="h4"
        component="h2"
        fontWeight="bold"
        color="text.primary"
        textAlign="center"
        mb={6}
      >
        Our Achievements
      </Typography>
      <Grid container spacing={3}>
        {achievements.map((achievement) => (
          <Grid item xs={6} md={3} key={achievement.id}>
            <Paper
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {achievement.icon && <Box mb={2}>{achievement.icon}</Box>}
              <Typography
                variant="h3"
                component="div"
                fontWeight="bold"
                color="primary.main"
                mb={1}
              >
                {achievement.value}
              </Typography>
              <Typography color="text.secondary">
                {achievement.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
