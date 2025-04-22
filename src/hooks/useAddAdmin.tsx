import { useCreateAdminMutation } from "@/redux/api";
import { FieldValue } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useAddAdmin(onClose: () => void) {
  // handle create admin api with useCreateAdminApiHook hook
  const [addAdmin, apiResponse] = useCreateAdminMutation();

  const handlerFunc = async (value: FieldValue<{ email: string }>) => {
    await addAdmin(value);
  };

  // handle api response with useApiResponseHandler Hook
  useApiMutationResponseHandler({
    apiResponse,
    successMessage: "Admin Created Successfully",
    onClose,
  });

  return { handlerFunc, ...apiResponse };
}
