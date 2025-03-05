import { useBlockUserMutation } from "@/redux/api/user.api";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useBlockUser() {
  const [blockUser, apiResponse] = useBlockUserMutation();

  const handleFunc = async (id: string) => {
    await blockUser({ id }).unwrap();
  };

  useApiMutationResponseHandler({
    successMessage: "User blocked successfully",
    apiResponse,
  });

  return { handleFunc, ...apiResponse };
}
