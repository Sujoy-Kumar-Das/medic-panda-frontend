import { useEmailVerificationOTPSentMutation } from "@/redux/api/user.api";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useSentVerificationOTP() {
  const [sentLink, apiResponse] = useEmailVerificationOTPSentMutation();

  const handlerFunc = async () => {
    await sentLink(undefined);
  };

  useApiMutationResponseHandler({
    successMessage: "Please check your email and verify.",
    apiResponse,
  });

  return { handlerFunc, ...apiResponse };
}
