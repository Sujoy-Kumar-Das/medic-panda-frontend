"use client";

import CommonContainer from "@/components/shared/common-container/CommonContainer";
import { Box, Button, Typography, useTheme } from "@mui/material";

export default function NeedHelpSection() {
  const theme = useTheme();

  return (
    <CommonContainer sx={{ backgroundColor: "primary.light" }}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box mb={{ xs: 4, md: 0 }} width={{ md: "66.66%" }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="primary.contrastText"
            gutterBottom
          >
            Need Help Choosing the Right Medicine?
          </Typography>
          <Typography variant="body1" color="primary.contrastText">
            Consult with our licensed pharmacists for personalized
            recommendations and advice.
          </Typography>
        </Box>

        <Box textAlign={{ xs: "center", md: "right" }} width={{ md: "33.33%" }}>
          <Button
            variant="contained"
            color="inherit"
            href="#"
            size="large"
            sx={{
              borderRadius: "9999px",
              color: "primary.main",
              px: 4,
              py: 1.5,
              boxShadow: 3,
              fontWeight: 700,
              backgroundColor: "primary.contrastText",
              "&:hover": {
                boxShadow: 3,
              },
            }}
          >
            Talk to a Pharmacist
          </Button>
        </Box>
      </Box>
    </CommonContainer>
  );
}
