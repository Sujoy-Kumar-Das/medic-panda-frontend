import heroImage from "@/assets/hero-image.avif";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import { Box, Grid } from "@mui/material";
import Image from "next/image";

export default function RightHeroSection() {
  return (
    <Grid item xs={12} md={6} position="relative" textAlign="center">
      <Image
        src={heroImage}
        alt="Medicine"
        height={300}
        width={600}
        style={{
          borderRadius: 20,
          width: "100%",
          maxWidth: 500,
          margin: "auto",
        }}
      />

      {/* Top Left Icon */}
      <Box
        position="absolute"
        top={{ xs: 5, md: -32 }}
        left={{ xs: 20, md: -32 }}
        width={96}
        height={96}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="background.paper"
        boxShadow={4}
        borderRadius={3}
        sx={{ transform: "rotate(6deg)" }}
      >
        <LocalPharmacyIcon sx={{ fontSize: 48, color: "primary.main" }} />
      </Box>

      {/* Bottom Right Icon */}
      <Box
        position="absolute"
        bottom={-2}
        right={-12}
        width={96}
        height={96}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="background.paper"
        boxShadow={4}
        borderRadius={3}
        sx={{ transform: "rotate(-6deg)" }}
      >
        <EmojiTransportationIcon
          sx={{ fontSize: 48, color: "secondary.main" }}
        />
      </Box>
    </Grid>
  );
}
