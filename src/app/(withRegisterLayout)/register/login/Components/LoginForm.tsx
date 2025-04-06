import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { useLogin } from "@/hooks/useLogin";
import loginSchema from "@/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";

export default function LoginForm() {
  const { login, isLoading, errorMessage } = useLogin();

  const handleLogin = async (values: FieldValues) => {
    await login(values);
  };

  console.log(errorMessage);
  return (
    <PandaForm
      onSubmit={handleLogin}
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
            href="/forgot-password"
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
        >
          Login
        </LoadingButton>
      </Stack>
    </PandaForm>
  );
}
