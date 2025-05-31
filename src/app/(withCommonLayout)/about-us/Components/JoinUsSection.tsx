import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function JoinUsSection() {
  return (
    <Box
      sx={{
        py: 10,
        textAlign: "center",
        background: "linear-gradient(135deg, #e0f7fa 30%, #b3e5fc 100%)",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Join Us on Our Journey to Better Health
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          mb={4}
          sx={{ maxWidth: 600, mx: "auto" }}
        >
          Explore our wide range of products or get in touch to learn more about
          how we can support your healthcare needs. Your health is our top
          priority.
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: "50px",
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              textTransform: "none",
            }}
            component={Link}
            href="/contact"
          >
            Contact Us
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              marginLeft: 2,
              borderRadius: "50px",
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              textTransform: "none",
            }}
            component={Link}
            href="/product"
          >
            Explore Products
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
