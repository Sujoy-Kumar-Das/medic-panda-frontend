import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { useApiResponseHandler } from "@/hooks/useApiMutationResponseHandler";
import { useCreateAdminMutation } from "@/redux/api/user.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack } from "@mui/material";
import { FieldValue } from "react-hook-form";
import { z } from "zod";
const addAdminValidationSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please Provide a valid email." }),
});

export default function AddAdminForm({ onClose }: { onClose: () => void }) {
  // handle create admin api with useCreateAdminApiHook hook
  const [handleCreateAdmin, { isLoading, error, isSuccess, isError }] =
    useCreateAdminMutation();

  const handleSubmit = async (value: FieldValue<{ email: string }>) => {
    await handleCreateAdmin(value);
    onClose();
  };

  // handle api response with useApiResponseHandler Hook
  useApiResponseHandler({
    error,
    isError,
    successMessage: "Admin Created Successfully",
    isSuccess,
  });
  return (
    <PandaForm
      onSubmit={handleSubmit}
      resolver={zodResolver(addAdminValidationSchema)}
    >
      <Stack spacing={2}>
        <PandaInputField
          type="email"
          name="email"
          fullWidth
          label="Email Address"
          placeholder="Enter email"
        />
        <Button
          type="submit"
          fullWidth
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            py: 1.5,
            borderRadius: 2,
          }}
          disabled={isLoading}
        >
          {isLoading ? "Making Admin..." : "Make Admin"}
        </Button>
      </Stack>
    </PandaForm>
  );
}
