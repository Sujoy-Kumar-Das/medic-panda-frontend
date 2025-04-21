import { useDeleteReplyMutation } from "@/redux/api/reply.api";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useDeleteReply() {
  const [deleteReply, apiResponse] = useDeleteReplyMutation();

  const handlerFunc = async (id: string) => {
    await deleteReply(id);
  };

  useApiMutationResponseHandler({
    successMessage: "Reply Deleted Successfully",
    apiResponse,
  });

  return { handlerFunc, ...apiResponse };
}
