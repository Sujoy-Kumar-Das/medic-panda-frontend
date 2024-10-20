/* eslint-disable react/no-unescaped-entities */
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
export default function ContactSection() {
  return (
    <Box>
      <Container sx={{ py: 10 }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          spacing={10}
        >
          <Stack
            direction={"column"}
            spacing={2}
            width={{ xs: "100%", md: "50%" }}
          >
            <Typography
              component={"h1"}
              variant="h4"
              color={"text.primary"}
              fontWeight={"bold"}
            >
              Contact us for any enquiries or questions you may have
            </Typography>
            <Typography
              component={"h1"}
              variant="body1"
              color={"text.secondary"}
            >
              Feel free to reach out to us with any inquiries or questions. Our
              team is here to assist you with whatever you need. Whether you
              have concerns, feedback, or need more information, we're just a
              message away. Contact us today, and we'll respond as quickly as
              possible.
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"column"} spacing={1}>
                <Typography sx={{ color: "text.primary", fontWeight: "bold" }}>
                  New York
                </Typography>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                  <EmailIcon sx={{ color: "text.secondary" }} />
                  <Typography sx={{ color: "text.secondary" }}>
                    sujoykumardas75@gmail.com
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                  <PhoneAndroidIcon sx={{ color: "text.secondary" }} />
                  <Typography sx={{ color: "text.secondary" }}>
                    +880 1319263016
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                  <LocationOnIcon sx={{ color: "text.secondary" }} />
                  <Typography sx={{ color: "text.secondary" }}>
                    Chandpur,Bangladesh
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction={"column"} spacing={1}>
                <Typography sx={{ color: "text.primary", fontWeight: "bold" }}>
                  Chicago
                </Typography>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                  <EmailIcon sx={{ color: "text.secondary" }} />
                  <Typography sx={{ color: "text.secondary" }}>
                    sujoykumardas75@gmail.com
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                  <PhoneAndroidIcon sx={{ color: "text.secondary" }} />
                  <Typography sx={{ color: "text.secondary" }}>
                    +880 1319263016
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                  <LocationOnIcon sx={{ color: "text.secondary" }} />
                  <Typography sx={{ color: "text.secondary" }}>
                    Chandpur,Bangladesh
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction={"column"}
            spacing={3}
            width={{ xs: "100%", md: "50%" }}
          >
            <input
              name="name"
              type="text"
              placeholder="Name"
              style={{
                padding: "14px 20px",
                borderRadius: "12px",
                border: "1px solid #ddd",
                color: "#2D3748",
                backgroundColor: "#F4F6F8",
                transition: "border-color 0.3s, box-shadow 0.3s",
                outline: "none",
              }}
            />
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              style={{
                padding: "14px 20px",
                borderRadius: "12px",
                border: "1px solid #ddd",
                color: "#2D3748",
                backgroundColor: "#F4F6F8",
                transition: "border-color 0.3s, box-shadow 0.3s",
                outline: "none",
              }}
            />
            <textarea
              placeholder="Message"
              rows={7}
              style={{
                padding: "14px 20px",
                borderRadius: "12px",
                border: "1px solid #ddd",
                color: "#2D3748",
                backgroundColor: "#F4F6F8",
                transition: "border-color 0.3s, box-shadow 0.3s",
                outline: "none",
                resize: "vertical",
              }}
            />
            <Button
              type="button"
              size="large"
              sx={{
                borderRadius: "24px",
                py: 1.5,
                boxShadow: "none",
                bgcolor: "primary.main",
              }}
            >
              Send
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
