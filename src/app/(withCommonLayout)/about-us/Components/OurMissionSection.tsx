import {
  CheckCircle as CheckCircleIcon,
  Favorite as FavoriteIcon,
  LocalPharmacy as LocalPharmacyIcon,
  MedicalServices as MedicalServicesIcon,
  People as PeopleIcon,
  VolunteerActivism as VolunteerActivismIcon,
} from "@mui/icons-material";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";

const missionItems = [
  {
    id: 1,
    title: "Patient First",
    description:
      "Every decision we make is guided by what's best for our patients' health and wellbeing.",
    icon: <FavoriteIcon color="primary" fontSize="large" />,
  },
  {
    id: 2,
    title: "Authenticity",
    description:
      "We guarantee 100% genuine medicines sourced directly from manufacturers.",
    icon: <CheckCircleIcon color="primary" fontSize="large" />,
  },
  {
    id: 3,
    title: "Care & Compassion",
    description:
      "We treat every customer with the empathy and respect they deserve.",
    icon: <VolunteerActivismIcon color="primary" fontSize="large" />,
  },
  {
    id: 4,
    title: "Quality Products",
    description:
      "We offer a wide range of products sourced from certified manufacturers.",
    icon: <LocalPharmacyIcon color="primary" fontSize="large" />,
  },
  {
    id: 5,
    title: "Customer Commitment",
    description: "Our customers are at the heart of everything we do.",
    icon: <PeopleIcon color="primary" fontSize="large" />,
  },
  {
    id: 6,
    title: "Professional Expertise",
    description:
      "Our team offers trusted advice to guide your healthcare decisions.",
    icon: <MedicalServicesIcon color="primary" fontSize="large" />,
  },
];

export default function OurMissionSection() {
  return (
    <Paper
      sx={{
        backgroundColor: "background.default",
        borderRadius: 3,
        p: 6,
        mb: 8,
        maxWidth: "lg",
        mx: "auto",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        fontWeight="bold"
        color="text.primary"
        textAlign="center"
        mb={6}
      >
        Our Mission & Values
      </Typography>
      <Grid container spacing={4}>
        {missionItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id} gap={4}>
            <Box textAlign="center">
              <Avatar
                sx={{
                  bgcolor: "primary.100",
                  width: 64,
                  height: 64,
                  mx: "auto",
                  mb: 3,
                }}
              >
                {item.icon}
              </Avatar>
              <Typography
                variant="h5"
                component="h3"
                fontWeight="medium"
                mb={2}
                color="text.primary"
              >
                {item.title}
              </Typography>
              <Typography color="text.secondary">{item.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
