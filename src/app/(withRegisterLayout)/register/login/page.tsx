/* eslint-disable react/no-unescaped-entities */
"use client";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { useLoginMutation } from "@/redux/api/auth.api";
import loginSchema from "@/schemas/login.schema";
import { IGenericErrorMessage } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
export default function LoginPage() {
  const [errors, setErrors] = useState("");
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();
  const handleLogin = async (data: FieldValues) => {
    await login(data);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Successful");
    } else if (isError) {
      setErrors((error as IGenericErrorMessage).message);
    }
  }, [isSuccess, isError, error]);
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Box
        sx={{
          bgcolor: "background.default",
          p: 5,
          boxShadow: 1,
          width: { xs: "90%", md: "50%" },
          borderRadius: 2,
        }}
      >
        <Typography component={"h1"} variant="h4" textAlign={"center"} mb={5}>
          Login
        </Typography>
        {errors && (
          <Box sx={{ bgcolor: "red", p: 0.5, borderRadius: "8px", mb: 3 }}>
            <Typography
              component={"h6"}
              color={"text.disabled"}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              {errors}
            </Typography>
          </Box>
        )}
        <PandaForm
          onSubmit={handleLogin}
          resolver={zodResolver(loginSchema)}
          defaultValues={{ email: "", password: "" }}
        >
          <Stack direction={"column"} spacing={2}>
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
            <Typography component={"p"} textAlign={"right"}>
              Forgot password ?{" "}
              <Typography
                component={Link}
                href={"/"}
                sx={{
                  color: "text.primary",
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
              loadingIndicator="Logging…"
              variant="outlined"
              type="submit"
            >
              Login
            </LoadingButton>
          </Stack>
        </PandaForm>
        <Typography component={"p"} textAlign={"center"} mt={3}>
          Don't have account ?{" "}
          <Typography
            component={Link}
            href={"/register/create-account"}
            sx={{
              color: "text.primary",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Create Now
          </Typography>
        </Typography>{" "}
      </Box>
    </Container>
  );
}
