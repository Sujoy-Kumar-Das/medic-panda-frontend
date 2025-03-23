import { useUnblockUserMutation } from "@/redux/api/user.api";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useUnblockUser(onClose: () => void) {
  const [unBlockUser, apiResponse] = useUnblockUserMutation();

  const handlerFunc = async (id: string) => {
    await unBlockUser({ id }).unwrap();
  };

  useApiMutationResponseHandler({
    apiResponse,
    successMessage: "User unblocked successfully",
    onClose,
  });

  return { handlerFunc, ...apiResponse };
}
