import useDeleteReview from "@/hooks/useDeleteReview";
import DeleteIcon from "@mui/icons-material/Delete";
import { CircularProgress, IconButton, Tooltip } from "@mui/material";

export default function ReviewDeleteButton({
  productId,
}: {
  productId: string;
}) {
  const { handlerFunc, isLoading } = useDeleteReview();

  return (
    <Tooltip title="Delete Review">
      <IconButton
        size="small"
        color="error"
        onClick={() => handlerFunc(productId)}
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
