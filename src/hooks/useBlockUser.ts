"use client";
import { useBlockUserMutation } from "@/redux/api";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useBlockUser(onClose: () => void) {
  const [blockUser, apiResponse] = useBlockUserMutation();

  const handleFunc = async (id: string) => {
    await blockUser({ id }).unwrap();
  };

  useApiMutationResponseHandler({
    successMessage: "User blocked successfully",
    apiResponse,
    onClose,
  });

  return { handleFunc, ...apiResponse };
}
