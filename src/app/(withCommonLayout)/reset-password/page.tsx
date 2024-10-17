"use client";

import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Validation schema for the reset password form
const validateField = z
  .object({
    password: z
      .string({ required_error: "New password is required." })
      .min(8, { message: "Password should be at least 8 characters long." }),
    confirmPassword: z
      .string({ required_error: "Confirm password is required." })
      .min(8, { message: "Password should be at least 8 characters long." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[0-9]/, {
        message: "Password must contain at least one number.",
      })
      .regex(/[@$!%*?&]/, {
        message: "Password must contain at least one special character.",
      })
      .max(32, {
        message: "Password should not be longer than 32 characters.",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export default function ResetPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const router = useRouter();

  const handleSubmit = async (values: FieldValues) => {
    setIsLoading(true);
    setError(null);

    const resetData = {
      password: values.password,
      newPassword: values.confirmPassword,
    };
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_base_url_local}${process.env.NEXT_PUBLIC_Reset_Password_API}`,
        resetData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      const data = res.data;
      if (data.success) {
        toast.success(data.message);
        router.push("/register/login");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      const errorMessage =
        axios.isAxiosError(err) && err.response?.data?.message
          ? err.response.data.message
          : "An error occurred while resetting the password.";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 4,
          boxShadow: 2,
          p: 4,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "primary.main" }}
        >
          Reset Password
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
          Enter your new password below to reset your account password.
        </Typography>

        {error && (
          <Typography variant="body2" color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <PandaForm
          onSubmit={handleSubmit}
          defaultValues={{ password: "", confirmPassword: "" }}
          resolver={zodResolver(validateField)}
        >
          <PandaInputField
            name="password"
            label="New Password"
            type="password"
            fullWidth
            sx={{ mb: 2 }}
          />
          <PandaInputField
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            fullWidth
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disabled={isLoading}
            sx={{ mt: 3, mb: 2, borderRadius: 2 }}
          >
            {isLoading ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              "Reset Password"
            )}
          </Button>
        </PandaForm>
      </Box>
    </Container>
  );
}
