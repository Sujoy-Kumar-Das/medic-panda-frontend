import { Email, LocationOn, Phone } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

const FooterContactInfo = () => (
  <Box color="text.primary">
    <Typography variant="h6" gutterBottom>
      Contact Us
    </Typography>
    <Stack spacing={2}>
      <Stack direction="row" alignItems="flex-start">
        <LocationOn sx={{ mr: 1, mt: 0.5 }} />
        <Typography color="text.primary">
          Chadpur Sadar, Chandpur, 3601
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center">
        <Phone sx={{ mr: 1 }} />
        <Typography color="text.primary">(+880) 1319263016</Typography>
      </Stack>
      <Stack direction="row" alignItems="center">
        <Email sx={{ mr: 1 }} />
        <Typography color="text.primary">sujoykumardas75@gmail.com</Typography>
      </Stack>
    </Stack>
  </Box>
);

export default FooterContactInfo;
