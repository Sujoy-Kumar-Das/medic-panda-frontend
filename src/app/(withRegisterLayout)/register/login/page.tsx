/* eslint-disable react/no-unescaped-entities */
import loginImage from "@/assets/lgoInBg.jpg";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "./Components/LoginForm";

export default function LoginPage() {
  return (
    <Container>
      <Box
        sx={{
          bgcolor: "background.paper",
          width: "100%",
          p: { xs: 3, md: 5 },
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          color="text.primary"
        >
          Welcome Back!
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Image Section */}
          <Box
            sx={{
              width: { xs: "100%", md: "45%" },
              textAlign: "center",
            }}
          >
            <Image
              src={loginImage}
              width={400}
              height={400}
              alt="Login image"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>

          {/* Form Section */}
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            {/* login form */}
            <LoginForm />

            <Typography component="p" textAlign="center" mt={3}>
              Don't have an account?{" "}
              <Typography
                component={Link}
                href="/register/create-account"
                sx={{
                  color: "primary.main",
                  fontWeight: "bold",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Create Now
              </Typography>
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
