import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import bgImage from "@/assets/about.png";

// Hero Section styles
const heroSectionStyle = {
  backgroundImage: `url(${bgImage.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "60vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  textAlign: "center",
  padding: "0 20px",
};

const heroTextStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  padding: "20px",
  borderRadius: "12px",
};

const buttonStyle = {
  marginTop: "20px",
  borderRadius: "20px",
  backgroundColor: "#1976d2",
  "&:hover": {
    backgroundColor: "#155a99",
  },
};

// Mission and Values section
const missionSectionStyle = {
  padding: "4rem 0",
  textAlign: "center",
  backgroundColor: "#f9f9f9",
};

// Team Card styles
const teamCardStyle = {
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },
};

export default function AboutPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={heroSectionStyle}>
        <Box sx={heroTextStyle}>
          <Typography variant="h2" gutterBottom>
            Welcome to Our Medicine Shop
          </Typography>
          <Typography variant="h6">
            Your trusted partner for reliable, affordable healthcare solutions.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={buttonStyle}
            component={Link}
            href="/products"
          >
            Explore Our Products
          </Button>
        </Box>
      </Box>

      {/* Mission and Values Section */}
      <Box sx={missionSectionStyle}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            At medicPanda, we strive to provide our customers with the highest
            quality medical supplies and pharmaceuticals at affordable prices.
            We are committed to improving the health and well-being of the
            communities we serve.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Quality Products
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We offer a wide range of products sourced from certified
                manufacturers to ensure you receive only the best healthcare
                solutions.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Customer Commitment
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our customers are at the heart of everything we do. We
                prioritize your health and ensure a seamless shopping experience
                every time.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Professional Expertise
              </Typography>
              <Typography variant="body2" color="text.secondary">
                With years of experience in the pharmaceutical industry, our
                team offers trusted advice and expertise to help guide your
                healthcare decisions.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Team Section */}
      <Box sx={{ py: 6 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Meet Our Team
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            mb={4}
          >
            Our team of dedicated professionals is here to ensure you have
            access to safe and effective medications.
          </Typography>
          <Grid container spacing={4}>
            {/* Team member card example */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={teamCardStyle}>
                <CardMedia sx={{ height: 300, position: "relative" }}>
                  <Image
                    src="/images/team-member.jpg"
                    alt="Team member"
                    layout="fill"
                    objectFit="cover"
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    Dr. John Doe
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Chief Pharmacist
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Add more team member cards here */}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 6, textAlign: "center", backgroundColor: "#e0f7fa" }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Join Us on Our Journey to Better Health
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
            Explore our products or reach out to us to learn more about how we
            can support your healthcare needs.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={buttonStyle}
            component={Link}
            href="/contact"
          >
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
