import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useAddAdmin from "@/hooks/useAddAdmin";
import { addAdminValidationSchema } from "@/schemas/admin.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack } from "@mui/material";
import { FieldValue } from "react-hook-form";

export default function AddAdminForm({ onClose }: { onClose: () => void }) {
  const { handleAddAdmin, isLoading } = useAddAdmin();

  const handleSubmit = async (value: FieldValue<{ email: string }>) => {
    await handleAddAdmin(value, onClose);
  };

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

        <LoaderButton
          type="submit"
          loadingText="Making Admin..."
          isLoading={isLoading}
        >
          Make Admin
        </LoaderButton>
      </Stack>
    </PandaForm>
  );
}
