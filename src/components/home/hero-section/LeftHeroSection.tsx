import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
export default function LeftHeroSection() {
  return (
    <Grid item xs={12} md={6}>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontWeight: 700,
          color: "text.primary",
          mb: 2,
        }}
      >
        Your Trusted{" "}
        <Box component="span" color="primary.main">
          Online Pharmacy
        </Box>
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ mb: 4, fontSize: { xs: "1rem", md: "1.25rem" } }}
      >
        Affordable. Reliable. Delivered to your door.
      </Typography>

      <Box display="flex" gap={2}>
        <Button
          variant="contained"
          component={Link}
          href="/product"
          color="primary"
          size="large"
          sx={{
            borderRadius: "9999px",
            boxShadow: 3,
            "&:hover": { boxShadow: 6 },
          }}
        >
          Shop Now
        </Button>
        <Button
          variant="outlined"
          component={Link}
          href="/categories"
          color="primary"
          size="large"
          sx={{
            borderRadius: "9999px",
            backgroundColor: "transparent",
          }}
        >
          View Categories
        </Button>
      </Box>
    </Grid>
  );
}
