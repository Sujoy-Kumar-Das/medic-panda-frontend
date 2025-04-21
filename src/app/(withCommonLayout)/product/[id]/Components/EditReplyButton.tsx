import useToggleState from "@/hooks/useToggleState";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Tooltip } from "@mui/material";
import EditReplyModal from "./EditReplyModal";
export default function EditReplyButton({ replyId }: { replyId: string }) {
  const editReplyModal = useToggleState();

  return (
    <>
      <Tooltip title="Edit Reply">
        <IconButton size="small" onClick={editReplyModal?.onOpen}>
          <EditIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      {editReplyModal?.state && (
        <EditReplyModal
          open={editReplyModal?.state}
          onClose={editReplyModal?.onClose}
          replyId={replyId}
        />
      )}
    </>
  );
}
