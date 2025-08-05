import {
  Facebook,
  Instagram,
  MedicationLiquid,
  Twitter,
} from "@mui/icons-material";
import {
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import CommonContainer from "../common-container/CommonContainer";
import FooterColumn from "./FooterColumn";
import FooterContactInfo from "./FooterContactInfo";

const Footer = () => {
  return (
    <CommonContainer
      sx={{
        pt: 8,
        pb: 4,
        bgcolor: "primary.dark",
        color: "primary.contrastText",
      }}
    >
      <Grid container spacing={4} mb={6}>
        {/* Column 1 - Logo & About */}
        <Grid item xs={12} sm={6} md={3}>
          <Stack direction="row" alignItems="center" mb={2}>
            <MedicationLiquid fontSize="large" />
            <Typography variant="h6" fontWeight="bold" ml={1}>
              PharmaCare
            </Typography>
          </Stack>
          <Typography mb={2} color={"text.primary"}>
            Your trusted online pharmacy for all your healthcare needs.
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton color={"text.primary"}>
              <Twitter />
            </IconButton>
            <IconButton color={"text.primary"}>
              <Instagram />
            </IconButton>
            <IconButton color={"text.primary"}>
              <Facebook />
            </IconButton>
          </Stack>
        </Grid>

        {/* Column 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <FooterColumn
            title="Quick Links"
            links={[
              "Home",
              "Products",
              "Categories",
              "Services",
              "About Us",
              "Contact",
            ]}
          />
        </Grid>

        {/* Column 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <FooterColumn
            title="Customer Service"
            links={[
              "My Account",
              "Order Tracking",
              "Wishlist",
              "Returns",
              "Shipping Policy",
              "FAQ",
            ]}
          />
        </Grid>

        {/* Column 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <FooterContactInfo />
        </Grid>
      </Grid>

      <Divider sx={{ borderColor: "grey.800", mb: 3 }} />

      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="body2" color="text.primary">
          © {new Date().getFullYear()} medicPanda. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={3}>
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
            (text) => (
              <Link
                key={text}
                href="#"
                color="text.primary"
                underline="none"
                sx={{
                  "&:hover": { color: "text.secondary" },
                  fontSize: "0.875rem",
                }}
              >
                {text}
              </Link>
            )
          )}
        </Stack>
      </Grid>
    </CommonContainer>
  );
};

export default Footer;
