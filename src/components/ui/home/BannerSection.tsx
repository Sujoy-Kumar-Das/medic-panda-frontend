import bgImage from "@/assets/banner.jpg";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function BannerSection() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            pl: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "text.disabled",
              fontSize: { xs: "3rem", md: "4rem" },
              fontWeight: "bold",
            }}
          >
            Your Health, Our Priority
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "text.primary",
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: "medium",
              maxWidth: "40ch",
            }}
          >
            Explore a Wide Range of Medicines, Delivered Fast and Safely to Your
            Home
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Button component={Link} href="/">
              Shop Now
            </Button>
            <Button component={Link} href="/">
              Visit Now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
