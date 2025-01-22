import { useBlockUserMutation } from "@/redux/api/user.api";

interface IUseBlockUserApiHook {
  id: string;
  onClose: () => void;
}

export default function useBlockUserApiHook({
  id,
  onClose,
}: IUseBlockUserApiHook) {
  // Hook to trigger the block user mutation
  const [blockUser, apiResponse] = useBlockUserMutation();

  // Function to handle the block user action
  const handleBlockUser = async () => {
    await blockUser({ id }).unwrap();
    onClose();
  };

  return { handleBlockUser, ...apiResponse };
}
