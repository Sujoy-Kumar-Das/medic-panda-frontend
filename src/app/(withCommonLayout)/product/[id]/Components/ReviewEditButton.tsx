import useToggleState from "@/hooks/useToggleState";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Tooltip } from "@mui/material";
import EditReviewModal from "./EditReviewModal";
export default function ReviewEditButton({ reviewId }: { reviewId: string }) {
  const editReviewModalState = useToggleState();

  return (
    <>
      <Tooltip title="Edit Review">
        <IconButton size="small" onClick={editReviewModalState.onOpen}>
          <EditIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      {editReviewModalState.state && (
        <EditReviewModal
          open={editReviewModalState.state}
          onClose={editReviewModalState.onClose}
          reviewId={reviewId}
        />
      )}
    </>
  );
}
