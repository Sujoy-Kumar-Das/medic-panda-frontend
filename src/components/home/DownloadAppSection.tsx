import { Box, Button, Container, Stack, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

export default function DownloadAppSection() {
  return (
    <Box py={10} bgcolor="primary.main" color="white">
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
          Download Our Mobile App
        </Typography>

        <Typography
          variant="h6"
          textAlign="center"
          maxWidth="600px"
          mx="auto"
          mb={5}
        >
          Get 10% off on your first order and enjoy faster access to medicines,
          doctor consultations, and lab tests.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              "&:hover": { backgroundColor: "#1a1a1a" },
              px: 4,
              py: 2,
              borderRadius: 2,
              textTransform: "none",
              minWidth: 200,
            }}
            startIcon={<AppleIcon fontSize="large" />}
          >
            <Box textAlign="left">
              <Typography variant="caption" lineHeight={1}>
                Download on the
              </Typography>
              <Typography variant="body1" lineHeight={1}>
                App Store
              </Typography>
            </Box>
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              "&:hover": { backgroundColor: "#1a1a1a" },
              px: 4,
              py: 2,
              borderRadius: 2,
              textTransform: "none",
              minWidth: 200,
            }}
            startIcon={<AndroidIcon fontSize="large" />}
          >
            <Box textAlign="left">
              <Typography variant="caption" lineHeight={1}>
                Get it on
              </Typography>
              <Typography variant="body1" lineHeight={1}>
                Google Play
              </Typography>
            </Box>
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
