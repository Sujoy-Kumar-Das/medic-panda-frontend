"use client";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import useResetPassword from "@/hooks/useResetPassword";
import { resetPasswordSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Box, CircularProgress, Container, Typography } from "@mui/material";

export default function ResetPasswordPage() {
  const { handlerFunc, isLoading } = useResetPassword();
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

        <PandaForm
          onSubmit={handlerFunc}
          defaultValues={{ password: "", confirmPassword: "" }}
          resolver={zodResolver(resetPasswordSchema)}
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
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disabled={isLoading}
            sx={{ mt: 3, mb: 2, borderRadius: 2 }}
            loadingIndicator={
              <CircularProgress size={24} sx={{ color: "white" }} />
            }
            loading={isLoading}
          >
            Reset Password
          </LoadingButton>
        </PandaForm>
      </Box>
    </Container>
  );
}
