import { useUnblockUserMutation } from "@/redux/api/user.api";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useUnblockUser() {
  const [unBlockUser, apiResponse] = useUnblockUserMutation();

  const handleUnblockUser = async (id: string) => {
    await unBlockUser({ id }).unwrap();
  };

  useApiMutationResponseHandler({
    apiResponse,
    successMessage: "User unblocked successfully",
  });

  return { handleUnblockUser, ...apiResponse };
}
