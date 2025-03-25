"use client";
import errorImage from "@/../public/no-data-found.png";
import { keyframes } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

interface INoDataFoundProps {
  message?: string;
}

export default function NoDataFoundGridCompo({
  message = "Currently no data found.",
}: INoDataFoundProps) {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        animation: `${fadeIn} 1s ease-out`,
      }}
    >
      <Box
        sx={{
          position: "relative",
          mb: 1,
          animation: `${bounce} 2s infinite`,
        }}
      >
        <Image src={errorImage} alt="No Data" width={300} height={300} />
      </Box>
      <Typography variant="h6" gutterBottom>
        {message}
      </Typography>
    </Box>
  );
}
