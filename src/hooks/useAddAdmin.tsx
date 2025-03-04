import { useCreateAdminMutation } from "@/redux/api/user.api";
import { FieldValue } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useAddAdmin() {
  // handle create admin api with useCreateAdminApiHook hook
  const [handleCreateAdmin, apiResponse] = useCreateAdminMutation();

  const handleAddAdmin = async (
    value: FieldValue<{ email: string }>,
    onClose: () => void
  ) => {
    await handleCreateAdmin(value);
    onClose();
  };

  // handle api response with useApiResponseHandler Hook
  useApiMutationResponseHandler({
    apiResponse,
    successMessage: "Admin Created Successfully",
  });

  return { handleAddAdmin, ...apiResponse };
}
