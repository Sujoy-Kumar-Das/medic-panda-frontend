import { useUnblockUserMutation } from "@/redux/api/user.api";

interface IUseUnblockUserApiHook {
  id: string;
  onClose: () => void;
}

export default function useUnblockUserApiHook({
  id,
  onClose,
}: IUseUnblockUserApiHook) {
  // Hook to trigger the block user mutation
  const [unBlockUser, apiResponse] = useUnblockUserMutation();

  // Function to handle the block user action
  const handleUnblockUser = async () => {
    await unBlockUser({ id }).unwrap();
    onClose();
  };

  return { handleUnblockUser, ...apiResponse };
}
