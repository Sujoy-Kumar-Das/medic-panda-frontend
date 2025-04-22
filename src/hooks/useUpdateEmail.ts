import { FieldValue } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";
import { useUpdateUserEmailMutation } from "@/redux/api";

export default function useUpdateEmail(onClose: () => void) {
  const [updateEmail, apiResponse] = useUpdateUserEmailMutation();

  const handlerFunc = async (value: FieldValue<{ email: string }>) => {
    await updateEmail(value);
  };

  useApiMutationResponseHandler({
    successMessage: "Email changed successfully",
    apiResponse,
    onClose,
  });

  return { handlerFunc, ...apiResponse };
}
