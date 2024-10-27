"use client";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Button, Card, Stack, Typography } from "@mui/material";

export default function ContactInfoCompo() {
  return (
    <Card
      sx={{
        backgroundColor: "primary.main",
        p: 4,
        color: "background.paper",
        boxShadow: 3,
        flexGrow: 1,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h5"
        sx={{ mb: 2, color: "background.paper", fontWeight: "bold" }}
      >
        Contact Information
      </Typography>

      <Stack spacing={2}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PhoneIcon sx={{ color: "background.paper", mr: 1 }} />
          <Typography variant="body1">Phone: +123 456 789</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <EmailIcon sx={{ color: "background.paper", mr: 1 }} />
          <Typography variant="body1">Email: support@medshop.com</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LocationOnIcon sx={{ color: "background.paper", mr: 1 }} />
          <Typography variant="body1">
            Address: 1234 Medicine St, Health City
          </Typography>
        </Box>
      </Stack>

      <Box
        sx={{
          display: "flex",
          mt: 4,
          justifyContent: "space-between",
          width: "60%",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "text.disabled",
            borderColor: "background.paper",
            "&:hover": {
              backgroundColor: "background.default",
              color: "text.primary",
            },
          }}
        >
          Email Us
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "text.disabled",
            borderColor: "background.paper",
            "&:hover": {
              backgroundColor: "background.default",
              color: "text.primary",
            },
          }}
        >
          Call Us
        </Button>
      </Box>
    </Card>
  );
}
