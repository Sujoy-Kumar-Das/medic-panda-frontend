"use client";
import { keyframes } from "@emotion/react";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export default function DashboardLoader() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <LocalPharmacyIcon
        sx={{
          fontSize: 80,
          color: "#007bff",
          animation: `${pulse} 1.5s ease-in-out infinite`,
        }}
      />

      <Typography
        variant="h6"
        sx={{ mt: 2, color: "#007bff", fontWeight: "bold" }}
      >
        Loading your dashboard...
      </Typography>

      <CircularProgress
        sx={{
          mt: 3,
          color: "#007bff",
        }}
      />
    </Box>
  );
}
