import { Box, Container, Grid, Typography } from "@mui/material";

const ourMissionData = [
  {
    id: 1,
    title: "Quality Products",
    details:
      "We offer a wide range of products sourced from certified manufacturers to ensure you receive only the best healthcare solutions.",
  },
  {
    id: 2,
    title: "Customer Commitment",
    details:
      "Our customers are at the heart of everything we do. We prioritize your health and ensure a seamless shopping experience every time.",
  },
  {
    id: 3,
    title: "Professional Expertise",
    details:
      "With years of experience in the pharmaceutical industry, our team offers trusted advice and expertise to help guide your healthcare decisions.",
  },
];

export default function OurMissionSection() {
  return (
    <Box sx={{ bgcolor: "#f0f4f8", textAlign: "center", py: 10 }}>
      <Container>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Our Mission
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          mb={6}
          maxWidth="md"
          mx="auto"
        >
          At medicPanda, we strive to provide our customers with the highest
          quality medical supplies and pharmaceuticals at affordable prices. We
          are committed to improving the health and well-being of the
          communities we serve.
        </Typography>

        <Grid container spacing={4}>
          {ourMissionData.map((item) => (
            <Grid key={item.id} item xs={12} md={4}>
              <Box
                sx={{
                  py: 6,
                  px: 4,
                  bgcolor: "background.paper",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  borderRadius: "16px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                  },
                  height: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "primary.main" }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.details}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
