import { useChangePasswordMutation } from "@/redux/api/auth/auth.api";
import { FieldValues } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useChangePassword(onClose: () => void) {
  const [changePassword, apiResponse] = useChangePasswordMutation();

  const handlerFunc = async (value: FieldValues) => {
    await changePassword(value).unwrap();
  };

  useApiMutationResponseHandler({
    successMessage: "Password changed successfully",
    apiResponse,
    onClose,
  });

  return { handlerFunc, ...apiResponse };
}
