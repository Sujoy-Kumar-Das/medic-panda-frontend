import ShopIcon from "@mui/icons-material/Shop"; // Represents Google Play
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import { Box, Button, Link, Stack, Typography } from "@mui/material";

export default function AppDownloadLeftSection() {
  return (
    <Box flex={1} mb={{ xs: 4, md: 0 }}>
      <Typography variant="h4" fontWeight="bold" color="text.primary" mb={2}>
        Download Our Mobile App
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Manage your prescriptions, track orders, and get health tips on the go
        with our easy-to-use app.
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        {/* App Store Button */}
        <Button
          variant="contained"
          component={Link}
          href="#"
          size="large"
          startIcon={<SmartphoneIcon />}
          sx={{
            bgcolor: "secondary.main",
            textDecoration: "none",
            color: "secondary.contrastText",
            borderRadius: 2,
            textTransform: "none",
            px: 3,
            py: 1.5,
            "&:hover": { bgcolor: "secondary.light" },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box textAlign="left">
            <Typography variant="caption" display="block">
              Download on the
            </Typography>
            <Typography fontWeight="medium" variant="body2">
              App Store
            </Typography>
          </Box>
        </Button>

        {/* Google Play Button */}
        <Button
          variant="contained"
          component={Link}
          href="#"
          size="large"
          startIcon={<ShopIcon />}
          sx={{
            bgcolor: "secondary.main",
            textDecoration: "none",
            color: "secondary.contrastText",
            borderRadius: 2,
            textTransform: "none",
            px: 3,
            py: 1.5,
            "&:hover": { bgcolor: "secondary.light" },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box textAlign="left">
            <Typography variant="caption" display="block">
              Get it on
            </Typography>
            <Typography fontWeight="medium" variant="body2">
              Google Play
            </Typography>
          </Box>
        </Button>
      </Stack>
    </Box>
  );
}
