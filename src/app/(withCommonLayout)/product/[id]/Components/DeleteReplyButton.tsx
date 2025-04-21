import useDeleteReply from "@/hooks/useDeleteReply";
import DeleteIcon from "@mui/icons-material/Delete";
import { CircularProgress, IconButton, Tooltip } from "@mui/material";

export default function DeleteReplyButton({ replyId }: { replyId: string }) {
  const { handlerFunc, isLoading } = useDeleteReply();

  return (
    <Tooltip title="Delete Reply">
      <IconButton
        size="small"
        color="error"
        onClick={() => handlerFunc(replyId)}
        disabled={isLoading}
      >
        {isLoading ? (
          <CircularProgress size={20} color="error" />
        ) : (
          <DeleteIcon fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
  );
}
