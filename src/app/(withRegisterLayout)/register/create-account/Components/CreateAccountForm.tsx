"use client";
import PandaFileUploader from "@/components/form/PandaFileUpload";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { useCreateUser } from "@/hooks/useCreateUser";
import createAccountSchema from "@/schemas/create-account.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";

export default function CreateAccountForm() {
  const { handlerFunc, isLoading } = useCreateUser();

  return (
    <PandaForm
      onSubmit={handlerFunc}
      resolver={zodResolver(createAccountSchema)}
    >
      <Stack direction="column" spacing={3}>
        <PandaInputField
          name="name"
          label="Name"
          placeholder="John Doe"
          type="text"
          fullWidth
        />
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
        <PandaFileUploader name="photo" label="Your Image" />

        <LoadingButton
          loading={isLoading}
          disabled={isLoading}
          loadingIndicator="Creating..."
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
          Create Account
        </LoadingButton>
      </Stack>
    </PandaForm>
  );
}
