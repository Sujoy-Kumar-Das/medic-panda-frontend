/* eslint-disable react/no-unescaped-entities */
"use client";

import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { useForgotPasswordMutation } from "@/redux/api/auth/auth.api";
import { IGenericErrorResponse } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FieldValue } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const validateField = z.object({
  email: z
    .string({ required_error: "Please enter your email." })
    .email({ message: "Provide a valid email." }),
});

export default function ForgetPasswordPage() {
  const [forgotPassword, { isLoading, isError, error, isSuccess }] =
    useForgotPasswordMutation();

  const [timer, setTimer] = useState(0);
  const [canRetry, setCanRetry] = useState(true);

  const handleSubmit = async (email: FieldValue<{ email: string }>) => {
    await forgotPassword(email);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Please check your email.");
      setCanRetry(false);
      setTimer(120);
    } else if (isError) {
      toast.error((error as IGenericErrorResponse).message);
    }
  }, [isSuccess, isError, error]);

  // Timer logic to count down and re-enable the button after 2 minutes
  useEffect(() => {
    let countdown: NodeJS.Timeout | undefined;
    if (timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && !canRetry) {
      setCanRetry(true);
    }

    return () => clearInterval(countdown);
  }, [timer, canRetry]);

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
          Forgot Password?
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
          Enter your registered email to receive a password reset link.
        </Typography>
        <PandaForm
          onSubmit={handleSubmit}
          defaultValues={{ email: "" }}
          resolver={zodResolver(validateField)}
        >
          <PandaInputField name="email" fullWidth label="Email" />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disabled={isLoading || !canRetry}
            sx={{
              mt: 3,
              mb: 2,
              borderRadius: 2,
            }}
          >
            {isLoading ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              "Send Reset Link"
            )}
          </Button>
        </PandaForm>

        {!canRetry && (
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
            Didn't receive a link? You can try again in {timer} seconds.
          </Typography>
        )}
      </Box>
    </Container>
  );
}
