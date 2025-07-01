import { LocalShipping, SupportAgent, VerifiedUser } from "@mui/icons-material";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";

const whyChooseUs = [
  {
    id: 1,
    title: "Genuine & Verified Medicines",
    description:
      "We provide only verified, doctor-approved medicines directly from licensed manufacturers to ensure complete safety and reliability.",
    icon: VerifiedUser,
  },
  {
    id: 2,
    title: "Fast & Reliable Delivery",
    description:
      "Get medicines delivered fast at your doorstep, even on weekends, through our trusted nationwide delivery network.",
    icon: LocalShipping,
  },
  {
    id: 3,
    title: "24/7 Pharmacist Support",
    description:
      "Our expert support team is always available to assist with prescriptions, dosage, and product-related questions anytime.",
    icon: SupportAgent,
  },
];

export default function WhyChoseUs() {
  return (
    <Box py={8}>
      <Container>
        <Typography
          component="h2"
          variant="h3"
          fontWeight="bold"
          textAlign="center"
          mb={6}
        >
          Why Choose Us
        </Typography>

        <Grid container spacing={4}>
          {whyChooseUs.map((item) => {
            const Icon = item.icon;
            return (
              <Grid item xs={12} md={4} key={item.id}>
                <Box
                  p={3}
                  bgcolor="background.default"
                  borderRadius={3}
                  boxShadow={1}
                  sx={{
                    transition: "all 0.3s",
                    "&:hover": {
                      boxShadow: 3,
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "primary.light",
                      width: 64,
                      height: 64,
                      mb: 2,
                    }}
                  >
                    <Icon sx={{ color: "blue.600", fontSize: 32 }} />
                  </Avatar>

                  <Typography
                    variant="h6"
                    fontWeight="600"
                    gutterBottom
                    color="text.primary"
                  >
                    {item.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
