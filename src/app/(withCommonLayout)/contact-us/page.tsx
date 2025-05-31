import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import ContactInfoCompo from "./Components/ContactInfoCompo";
import SendMessageCompo from "./Components/SendMessageCompo";

const ContactUsPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, sm: 4 },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          mb: { xs: 3, md: 6 },
          maxWidth: 700,
          mx: "auto",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "primary.main",
            mb: 2,
            fontSize: { xs: "1.75rem", sm: "2.5rem" },
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          Get in Touch
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "text.secondary",
            mb: 3,
            fontSize: { xs: "1rem", md: "1.125rem" },
          }}
        >
          We'd love to hear from you! Please fill out the form below or use our
          contact information to reach us.
        </Typography>
        <Divider
          sx={{
            width: { xs: "30%", md: "20%" },
            height: 4,
            mx: "auto",
            mb: 4,
            backgroundColor: "primary.main",
            borderRadius: 2,
          }}
        />
      </Box>

      <Grid container spacing={{ xs: 3, md: 6 }}>
        {/* Contact Information Section */}
        <Grid item xs={12} md={5}>
          <ContactInfoCompo />
        </Grid>

        {/* Contact Form Section */}
        <Grid item xs={12} md={7}>
          <SendMessageCompo />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUsPage;
