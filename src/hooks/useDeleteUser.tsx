import { useDeleteUserMutation } from "@/redux/api/user.api";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useDeleteUser() {
  const [deleteUser, apiResponse] = useDeleteUserMutation();

  const deleteUserHandler = async (id: string, onClose: () => void) => {
    await deleteUser({ id }).unwrap();
    onClose();
  };

  useApiMutationResponseHandler({
    successMessage: "User Deleted successfully",
    apiResponse,
  });

  return { deleteUserHandler, ...apiResponse };
}
