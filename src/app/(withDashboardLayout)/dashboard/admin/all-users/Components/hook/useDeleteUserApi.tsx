import { useDeleteUserMutation } from "@/redux/api/user.api";

interface IUseDeleteUserApiHook {
  id: string;
  onClose: () => void;
}

export default function useDeleteUserApiHook({
  id,
  onClose,
}: IUseDeleteUserApiHook) {
  // Hook to trigger the Delete user mutation
  const [DeleteUser, apiResponse] = useDeleteUserMutation();

  // Function to handle the Delete user action
  const handleDeleteUser = async () => {
    await DeleteUser({ id }).unwrap();
    onClose();
  };

  return { handleDeleteUser, ...apiResponse };
}
