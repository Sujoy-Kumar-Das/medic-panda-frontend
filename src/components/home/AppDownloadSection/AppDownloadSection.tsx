import CommonContainer from "@/components/shared/common-container/CommonContainer";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import AppDownloadLeftSection from "./AppDownloadLeftSection";
import AppDownloadRightSection from "./AppDownloadRightSection";

export default function AppDownloadSection() {
  return (
    <CommonContainer bgColor="background.paper">
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        gap={4}
      >
        {/* Left Content */}
        <AppDownloadLeftSection />

        {/* Right Image */}
        <AppDownloadRightSection />
      </Box>
    </CommonContainer>
  );
}
