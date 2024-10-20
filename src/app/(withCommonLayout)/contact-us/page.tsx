import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import ContactInfoCompo from "./ContactInfoCompo";
import SendMessageCompo from "./SendMessageCompo";

const ContactUs = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" sx={{ color: "primary.main", mb: 1 }}>
          Get in Touch
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "text.secondary", mb: 2 }}>
          We’d love to hear from you! Please fill out the form below and we’ll
          get in touch soon.
        </Typography>
        <Divider sx={{ width: "50%", margin: "auto", mb: 4 }} />
      </Box>

      <Grid container spacing={4}>
        <Grid item container spacing={4} xs={12}>
          {/* Contact Information Section */}
          <Grid item xs={12} md={6} display="flex">
            <ContactInfoCompo />
          </Grid>

          {/* Contact Form Section */}
          <Grid item xs={12} md={6} display="flex">
            <SendMessageCompo />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
