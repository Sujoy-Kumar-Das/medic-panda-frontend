"use client";
/* eslint-disable react/no-unescaped-entities */
import loginImage from "@/assets/lgoInBg.jpg";
import FormHeader from "@/components/shared/form-header/FormHeader";
import { useLogin } from "@/hooks/useLogin";
import loginSchema from "@/schemas/login.schema";
import {
  Box,
  Container,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import RegistrationForm from "../Components/RegistrationForm";
import Credential from "./Components/Credantial";

const loginCredential = {
  user: { email: "sujoykumardas90@gmail.com", password: "MedicPanda@4321" },
  admin: { email: "sujoykumardas75@gmail.com", password: "MedicPanda@4321" },
  supperAdmin: { email: "medicPanda@gmail.com", password: "MedicPanda@4321" },
  reset: { email: "", password: "" },
};

const users = ["user", "admin", "supperAdmin", "reset"];

export default function LoginPage() {
  const [defaultValue, setDefaultValue] = useState<{
    email: string;
    password: string;
  } | null>(null);

  const onSuccessMessage = () => toast.success("Login Successful...");
  const { handlerFunc, isLoading } = useLogin(onSuccessMessage);

  const handleChangeDefaultValue = (user: string) => {
    const cred = loginCredential[user as keyof typeof loginCredential];
    if (cred) setDefaultValue(cred);
  };

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

          {/* Login credentials for demo/testing */}
          <Credential
            users={users}
            onSetDefaultValue={handleChangeDefaultValue}
          />

          {/* Login form */}
          <RegistrationForm
            key={defaultValue?.email}
            onSubmit={handlerFunc}
            isLoading={isLoading}
            type="login"
            validationSchema={loginSchema}
            defaultValues={defaultValue || { email: "", password: "" }}
          />

          {/* Forgot Password link */}
          <Typography
            component={MuiLink}
            href="/forgot-password"
            sx={{
              display: "block",
              textAlign: "right",
              mt: 1,
              fontSize: "14px",
              color: "primary.main",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Forgot Password?
          </Typography>

          {/* Create Account link */}
          <Typography textAlign="center" mt={3}>
            {"Don't have an account? "}
            <MuiLink
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
            </MuiLink>
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}
