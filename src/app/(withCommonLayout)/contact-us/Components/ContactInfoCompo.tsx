"use client";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Button, Card, Stack, Typography } from "@mui/material";

export default function ContactInfoCompo() {
  return (
    <Card
      sx={{
        p: { xs: 3, md: 4 },
        height: "100%",
        backgroundColor: "background.paper",
        transition: "all 0.3s ease",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          color: "text.primary",
          fontWeight: 700,
          fontSize: { xs: "1.5rem", md: "1.75rem" },
        }}
      >
        Contact Information
      </Typography>

      <Stack spacing={3}>
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <Box
            sx={{
              backgroundColor: "primary.light",
              p: 1,
              borderRadius: "50%",
              mr: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PhoneIcon
              sx={{
                color: "primary.contrastText",
                fontSize: "1.25rem",
              }}
            />
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              Phone
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              +123 456 7890
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <Box
            sx={{
              backgroundColor: "primary.light",
              p: 1,
              borderRadius: "50%",
              mr: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EmailIcon
              sx={{
                color: "primary.contrastText",
                fontSize: "1.25rem",
              }}
            />
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              Email
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              support@medshop.com
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <Box
            sx={{
              backgroundColor: "primary.light",
              p: 1,
              borderRadius: "50%",
              mr: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LocationOnIcon
              sx={{
                color: "primary.contrastText",
                fontSize: "1.25rem",
              }}
            />
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              Address
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              1234 Medicine Street
              <br />
              Health City, HC 12345
              <br />
              United States
            </Typography>
          </Box>
        </Box>
      </Stack>

      <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
        <Button
          variant="outlined"
          sx={{
            px: 3,
            py: 1,
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "primary.light",
              transform: "translateY(-2px)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Email Us
        </Button>
        <Button
          variant="contained"
          sx={{
            px: 3,
            py: 1,
            fontWeight: 600,
            "&:hover": {
              transform: "translateY(-2px)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Call Us
        </Button>
      </Stack>
    </Card>
  );
}
