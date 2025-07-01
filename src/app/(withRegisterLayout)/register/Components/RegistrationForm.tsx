"use client";
import PandaFileUploader from "@/components/form/PandaFileUpload";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { AnyZodObject } from "zod";

interface RegistrationFormProps {
  onSubmit: (formData: FieldValues) => Promise<void>;
  validationSchema: AnyZodObject;
  isLoading: boolean;
  type: "create" | "login";
  defaultValues?: any;
}

export default function RegistrationForm({
  onSubmit,
  validationSchema,
  isLoading,
  type,
  defaultValues,
}: RegistrationFormProps) {
  const isCreate = type === "create";
  return (
    <PandaForm
      onSubmit={onSubmit}
      resolver={zodResolver(validationSchema)}
      defaultValues={defaultValues && defaultValues}
    >
      <Stack direction="column" spacing={3}>
        {isCreate && (
          <PandaInputField
            name="name"
            label="Name"
            placeholder="John Doe"
            type="text"
            fullWidth
          />
        )}
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

        {isCreate && <PandaFileUploader name="photo" label="Your Image" />}

        <LoadingButton
          loading={isLoading}
          disabled={isLoading}
          loadingIndicator={isCreate ? "Creating..." : " Logging..."}
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
          {isCreate ? "Create Account" : "Login"}
        </LoadingButton>
      </Stack>
    </PandaForm>
  );
}
