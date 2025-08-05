import image1 from "@/assets/app_download_1.avif";
import image2 from "@/assets/app_download_2.avif";
import { Box } from "@mui/material";
import Image from "next/image";

export default function AppDownloadRightSection() {
  return (
    <Box
      flex={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      minHeight={{ xs: 300, md: 400 }}
      padding={2}
    >
      <Box position="relative">
        {/* Background Image */}
        <Box
          component={Image}
          src={image1}
          alt="App Download 1"
          width={280}
          height={400}
          style={{
            borderRadius: "16px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
            objectFit: "cover",
            zIndex: 1,
          }}
        />

        {/* Foreground Image */}
        <Box
          component={Image}
          src={image2}
          alt="App Download 2"
          width={260}
          height={360}
          style={{
            borderRadius: "16px",
            position: "absolute",
            bottom: -40,
            right: -40,
            boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
            transition: "transform 0.3s ease",
            zIndex: 2,
          }}
        />
      </Box>
    </Box>
  );
}
