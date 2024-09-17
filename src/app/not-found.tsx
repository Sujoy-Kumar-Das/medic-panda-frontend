"use client";
import { keyframes } from "@emotion/react";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import errorImage from "../../public/404.png";

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

export default function NotFoundPage() {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        py: 4,
        animation: `${fadeIn} 1s ease-out`,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 400,
          height: 300,
          mb: 4,
          animation: `${bounce} 2s infinite`,
        }}
      >
        <Image
          src={errorImage}
          alt="404 Error"
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Typography variant="h4" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={4}>
        The page you are looking for doesn’t exist or has been moved.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        href="/"
        sx={{
          textTransform: "none",
          paddingX: 4,
          paddingY: 1.5,
          borderRadius: 2,
          transition: "background-color 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#0056b3",
            transform: "scale(1.05)",
          },
        }}
      >
        Back to Homepage
      </Button>
    </Container>
  );
}
