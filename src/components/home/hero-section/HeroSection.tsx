import { Grid } from "@mui/material";
import LeftHeroSection from "./LeftHeroSection";
import RightHeroSection from "./RightHeroSection";

import CommonContainer from "@/components/shared/common-container/CommonContainer";

export default function HeroSection() {
  return (
    <CommonContainer sx={{ pt: { xs: 12, md: 16 }, pb: { xs: 8, md: 14 } }}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Left Text Content */}
        <LeftHeroSection />

        {/* Right Image & Icons */}
        <RightHeroSection />
      </Grid>
    </CommonContainer>
  );
}
