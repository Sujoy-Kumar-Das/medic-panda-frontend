import { useDeleteUserMutation } from "@/redux/api/user.api";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useDeleteUser() {
  const [deleteUser, apiResponse] = useDeleteUserMutation();

  const deleteUserHandler = async (id: string) => {
    await deleteUser({ id }).unwrap();
  };

  useApiMutationResponseHandler({
    successMessage: "User Deleted successfully",
    apiResponse,
  });

  return { deleteUserHandler, ...apiResponse };
}
