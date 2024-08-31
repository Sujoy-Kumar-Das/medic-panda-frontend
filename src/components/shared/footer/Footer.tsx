import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Box, Container, Stack, Typography } from "@mui/material";
import FooterButtons from "./FooterButtons";
import SubscribeNewsLetter from "./SubscribeNewsLetter";
export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "background.default" }}>
      <Container sx={{ py: 10 }}>
        <Stack
          direction={{ md: "column", lg: "row" }}
          justifyContent={{ md: "center", lg: "space-between" }}
          spacing={{ md: 3, lg: 0 }}
        >
          <Box>
            <Typography
              sx={{ color: "text.primary", fontWeight: "bold", mb: 3 }}
            >
              Company
            </Typography>
            <Typography sx={{ color: "", fontWeight: "medium" }}>
              About
            </Typography>
            <Typography
              sx={{ color: "text.primary", fontWeight: "medium", my: 1 }}
            >
              Blogs
            </Typography>
            <Typography sx={{ color: "text.primary", fontWeight: "medium" }}>
              Returns
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ color: "text.primary", fontWeight: "bold", mb: 3 }}
            >
              Info
            </Typography>
            <Typography sx={{ color: "text.primary", fontWeight: "medium" }}>
              How it works
            </Typography>
            <Typography
              sx={{ color: "text.primary", fontWeight: "medium", my: 1 }}
            >
              Our Polices
            </Typography>
            <Typography sx={{ color: "text.primary", fontWeight: "medium" }}>
              FAQ
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ color: "text.primary", fontWeight: "bold", mb: 3 }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Typography sx={{ color: "text.primary", fontWeight: "medium" }}>
                <LocationOnOutlinedIcon />
              </Typography>
              <Typography sx={{ color: "text.primary", fontWeight: "medium" }}>
                Chandpur,Bangladesh
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Typography sx={{ color: "text.primary", fontWeight: "medium" }}>
                <LocalPhoneOutlinedIcon />
              </Typography>
              <Typography
                sx={{ color: "text.primary", fontWeight: "medium", my: 1 }}
              >
                +88 01319263016
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Typography sx={{ color: "text.primary", fontWeight: "medium" }}>
                <EmailOutlinedIcon />
              </Typography>
              <Typography sx={{ color: "text.primary", fontWeight: "medium" }}>
                sujoykumardas75@gmail.com
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{ color: "text.primary", fontWeight: "bold", mb: 3 }}
            >
              Sing up for news letter
            </Typography>
            <SubscribeNewsLetter />
            <FooterButtons />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
