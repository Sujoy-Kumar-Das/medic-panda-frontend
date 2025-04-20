import { Box } from "@mui/material";
import ReviewDeleteButton from "./ReviewDeleteButton";
import ReviewEditButton from "./ReviewEditButton";

interface ReviewActionButtonsProps {
  userId: string | undefined;
  reviewId: string;
  reviewerId: string;
}

export default function ReviewActionButtons({
  userId,
  reviewId,
  reviewerId,
}: ReviewActionButtonsProps) {
  if (userId !== reviewerId) {
    return null;
  }
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        zIndex: 1,
      }}
    >
      <ReviewEditButton reviewId={reviewId} />
      <ReviewDeleteButton reviewId={reviewId} />
    </Box>
  );
}
