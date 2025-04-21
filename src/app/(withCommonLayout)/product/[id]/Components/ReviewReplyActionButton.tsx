import { useAuth } from "@/hooks/useAuth";
import { Stack } from "@mui/material";
import DeleteReplyButton from "./DeleteReplyButton";
import EditReplyButton from "./EditReplyButton";

export default function ReviewReplyActionButton({
  replyId,
  replier,
}: {
  replyId: string;
  replier: string;
}) {
  const { user } = useAuth();

  if (user?.id !== replier) {
    return null;
  }

  return (
    <Stack direction={"row"} gap={1} alignItems={"center"}>
      <EditReplyButton replyId={replyId} />
      <DeleteReplyButton replyId={replyId} />
    </Stack>
  );
}
