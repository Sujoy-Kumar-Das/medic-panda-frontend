import { useUpdateUserInfoMutation } from "@/redux/api/user.api";
import { FieldValues } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useUpdateUserInfo() {
  const [updateUserInfo, apiResponse] = useUpdateUserInfoMutation();

  const handleUpdateInfo = async (value: FieldValues) => {
    await updateUserInfo(value).unwrap();
  };

  useApiMutationResponseHandler({
    apiResponse,
    successMessage: "User Information Updated Successfully",
  });

  return { handleUpdateInfo, ...apiResponse };
}
