import useToggleState from "@/hooks/useToggleState";
import ReplyIcon from "@mui/icons-material/Reply";
import { IconButton, Tooltip } from "@mui/material";
import AddReplyModal from "./AddReplyModal";
export default function AddReplyButton({ reviewId }: { reviewId: string }) {
  const { onOpen, onClose, state } = useToggleState(false);
  return (
    <>
      <Tooltip title="Reply Review">
        <IconButton size="small" onClick={onOpen}>
          <ReplyIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      {state && (
        <AddReplyModal onClose={onClose} open={state} reviewId={reviewId} />
      )}
    </>
  );
}
