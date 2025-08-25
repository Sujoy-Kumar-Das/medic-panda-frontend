import { Box, Typography } from "@mui/material";

export default function CategoryHeader() {
  return (
    <Box
      sx={{
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 14 },
        background: "linear-gradient(to right, #ecfeff, #eff6ff)",
      }}
    >
      <Box textAlign="center">
        <Typography
          variant="h2"
          component="h1"
          color="text.primary"
          sx={{
            mb: 4,
          }}
        >
          Explore Our{" "}
          <Box component="span" color="primary.main">
            Categories
          </Box>
        </Typography>

        <Typography
          variant="h5"
          color="text.secondary"
          sx={{
            maxWidth: "48rem",
            mx: "auto",
          }}
        >
          Browse through our comprehensive range of healthcare products
          organized by category for easy navigation
        </Typography>
      </Box>
    </Box>
  );
}
