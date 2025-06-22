"use client";
/* eslint-disable react/no-unescaped-entities */
import loginImage from "@/assets/lgoInBg.jpg";
import FormHeader from "@/components/shared/form-header/FormHeader";
import { useLogin } from "@/hooks/useLogin";
import loginSchema from "@/schemas/login.schema";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import RegistrationForm from "../Components/RegistrationForm";

export default function LoginPage() {
  const { handlerFunc, isLoading } = useLogin();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        width={"100%"}
      >
        {/* Image Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            textAlign: "center",
          }}
        >
          <Image
            src={loginImage}
            width={400}
            height={400}
            alt="Login image"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Box>

        {/* Form Section */}
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <FormHeader
            title="Login"
            subtitle="Enter your credentials to continue."
          />

          {/* login form */}
          <RegistrationForm
            onSubmit={handlerFunc}
            isLoading={isLoading}
            type="login"
            validationSchema={loginSchema}
          />

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
    </Container>
  );
}
