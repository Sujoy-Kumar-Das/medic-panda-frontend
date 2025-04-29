"use client";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import useResetPassword from "@/hooks/useResetPassword";
import { resetPasswordSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";
export default function ResetPasswordForm() {
  const { handlerFunc, isLoading } = useResetPassword();

  return (
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
  );
}
