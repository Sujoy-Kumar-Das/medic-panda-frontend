import useDeleteReview from "@/hooks/useDeleteReview";
import DeleteIcon from "@mui/icons-material/Delete";
import { CircularProgress, IconButton, Tooltip } from "@mui/material";

export default function ReviewDeleteButton({ reviewId }: { reviewId: string }) {
  const { handlerFunc, isLoading } = useDeleteReview();

  return (
    <Tooltip title="Delete Review">
      <IconButton
        size="small"
        color="error"
        onClick={() => handlerFunc(reviewId)}
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
