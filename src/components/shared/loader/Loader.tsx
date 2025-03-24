"use client";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { Box, Typography, keyframes } from "@mui/material";

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

export default function Loader({
  height = "100vh",
}: {
  height?: "100vh" | "100%";
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height,
        backgroundColor: "#f4f4f4",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 100,
          height: 100,
          backgroundColor: "#007bff",
          borderRadius: "50%",
          animation: `${pulse} 1.5s infinite ease-in-out`,
        }}
      >
        <LocalHospitalIcon
          sx={{
            fontSize: 60,
            color: "#fff",
          }}
        />
      </Box>
      <Typography
        sx={{
          mt: 2,
          fontSize: "1.2rem",
          fontWeight: "500",
          color: "#007bff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Loading Medic Panda...
      </Typography>
    </Box>
  );
}
