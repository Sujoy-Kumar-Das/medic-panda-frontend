import { useForgotPasswordMutation } from "@/redux/api";
import { FieldValue } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useForgotPassword(onClose: () => void) {
  const [forgotPassword, apiResponse] = useForgotPasswordMutation();

  const handlerFunc = async (email: FieldValue<{ email: string }>) => {
    await forgotPassword(email);
  };

  useApiMutationResponseHandler({
    successMessage: "Please Check Your Email.",
    onClose,
    apiResponse,
  });

  return { handlerFunc, ...apiResponse };
}
