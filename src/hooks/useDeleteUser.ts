import { useDeleteUserMutation } from "@/redux/api";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useDeleteUser(onClose: () => void) {
  const [deleteUser, apiResponse] = useDeleteUserMutation();

  const handlerFunc = async (id: string) => {
    await deleteUser({ id }).unwrap();
  };

  useApiMutationResponseHandler({
    successMessage: "User Deleted successfully",
    apiResponse,
    onClose,
  });

  return { handlerFunc, ...apiResponse };
}
