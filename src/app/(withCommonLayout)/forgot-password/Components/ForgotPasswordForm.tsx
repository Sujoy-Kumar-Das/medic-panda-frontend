/* eslint-disable react/no-unescaped-entities */
"use client";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import FormHeader from "@/components/shared/form-header/FormHeader";
import useForgotPassword from "@/hooks/useForgotPassword";
import { useTimer } from "@/hooks/useTimer";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { z } from "zod";

const validateField = z.object({
  email: z
    .string({ required_error: "Please enter your email." })
    .email({ message: "Provide a valid email." }),
});
export default function ForgotPasswordForm() {
  const { startTimer, canRetry, timer } = useTimer();
  const { handlerFunc, isLoading } = useForgotPassword(startTimer);

  return (
    <Box sx={{ width: { xs: "100%", md: "50%" } }}>
      <FormHeader
        title="Forgot Password?"
        subtitle="Enter your registered email to receive a password reset link."
      />
      <PandaForm
        onSubmit={handlerFunc}
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
  );
}
