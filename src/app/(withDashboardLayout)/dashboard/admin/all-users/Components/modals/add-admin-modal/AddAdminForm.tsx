import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import useAddAdmin from "@/hooks/useAddAdmin";
import { addAdminValidationSchema } from "@/schemas/admin.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";

export default function AddAdminForm({ onClose }: { onClose: () => void }) {
  const { handlerFunc, isLoading } = useAddAdmin(onClose);

  return (
    <PandaForm
      onSubmit={handlerFunc}
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

        <LoadingButton
          type="submit"
          loadingIndicator="Making Admin..."
          loading={isLoading}
          disabled={isLoading}
        >
          Make Admin
        </LoadingButton>
      </Stack>
    </PandaForm>
  );
}
