/* eslint-disable react/no-unescaped-entities */
"use client";
import loginImage from "@/assets/lgoInBg.jpg";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { useLogin } from "@/hooks/useLogin";
import loginSchema from "@/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export default function LoginPage() {
  const { login, isLoading, isSuccess, errorMessage } = useLogin();

  const handleLoginUser = useCallback(
    async (data: FieldValues) => {
      await login(data);
    },
    [login]
  );

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Successful");
    } else if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [isSuccess, errorMessage]);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 2, md: 6 },
      }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          width: { xs: "100%", sm: "90%", md: "75%", lg: "60%" },
          boxShadow: 3,
          borderRadius: 3,
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
            <PandaForm
              onSubmit={handleLoginUser}
              resolver={zodResolver(loginSchema)}
              defaultValues={{ email: "", password: "" }}
            >
              <Stack direction="column" spacing={3}>
                <PandaInputField
                  name="email"
                  label="Email"
                  placeholder="example@gmail.com"
                  type="email"
                  fullWidth
                />
                <PandaInputField
                  name="password"
                  label="Password"
                  placeholder="*******"
                  type="password"
                  fullWidth
                />

                <Typography
                  component="p"
                  textAlign="right"
                  sx={{ color: "text.secondary" }}
                >
                  Forgot password?{" "}
                  <Typography
                    component={Link}
                    href="/reset-password"
                    sx={{
                      color: "primary.main",
                      fontWeight: "bold",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Reset Now
                  </Typography>
                </Typography>

                <LoadingButton
                  loading={isLoading}
                  disabled={isLoading}
                  loadingIndicator="Logging in…"
                  variant="contained"
                  fullWidth
                  type="submit"
                  sx={{
                    bgcolor: "primary.main",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                    py: 1.5,
                    fontWeight: "bold",
                    borderRadius: 2,
                    transition: "transform 0.3s",
                    "&:active": {
                      transform: "scale(0.98)",
                    },
                  }}
                >
                  Login
                </LoadingButton>
              </Stack>
            </PandaForm>

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
