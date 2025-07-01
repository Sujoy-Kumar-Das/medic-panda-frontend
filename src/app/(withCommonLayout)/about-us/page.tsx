import { Box, Grid, Paper, Typography } from "@mui/material";
import AchievementsSection from "./Components/AchivementSection";
import JoinUsSection from "./Components/JoinUsSection";
import OurMissionSection from "./Components/OurMissionSection";
import TeamMemberSection from "./Components/TeamMemberSection";

const AboutPage = () => {
  return (
    <Box pt={5}>
      {/* Hero Section */}
      <Paper
        sx={{
          background: "linear-gradient(to right, #3b82f6, #1d4ed8)",
          color: "white",
          borderRadius: 3,
          p: { xs: 4, md: 8 },
          mb: 8,
          maxWidth: "lg",
          mx: "auto",
        }}
      >
        <Typography variant="h3" component="h1" fontWeight="bold" mb={3}>
          About MediCare
        </Typography>
        <Typography variant="h5" sx={{ maxWidth: "xl" }}>
          Your trusted partner in healthcare, providing authentic medicines, lab
          tests, and doctor consultations at your convenience.
        </Typography>
      </Paper>

      {/* Our Story */}
      <Grid
        container
        spacing={4}
        alignItems="center"
        mb={8}
        sx={{ maxWidth: "lg", mx: "auto" }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            color="text.primary"
            mb={3}
          >
            Our Story
          </Typography>
          <Typography color="text.secondary" mb={3}>
            Founded in 2015, MediCare started with a simple mission: to make
            healthcare accessible and affordable for everyone. What began as a
            single pharmacy in Bangalore has now grown into a nationwide
            healthcare platform serving millions of customers.
          </Typography>
          <Typography color="text.secondary">
            We combine technology with healthcare expertise to deliver
            medicines, diagnostic tests, and doctor consultations right to your
            doorstep. Our team of pharmacists, doctors, and healthcare
            professionals work tirelessly to ensure you receive the best care
            possible.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="MediCare team"
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              width: "100%",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>

      {/* Our Mission */}
      <OurMissionSection />

      {/* Achievements */}
      <AchievementsSection />

      {/* Team */}
      <TeamMemberSection />

      {/* CTA */}
      <JoinUsSection />
    </Box>
  );
};

export default AboutPage;
