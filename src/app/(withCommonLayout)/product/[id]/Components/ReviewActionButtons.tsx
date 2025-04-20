import { Box } from "@mui/material";
import AddReplyButton from "./AddReplyButton";
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
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        zIndex: 1,
      }}
    >
      <AddReplyButton reviewId={reviewId} />
      {userId === reviewerId && (
        <>
          <ReviewEditButton reviewId={reviewId} />
          <ReviewDeleteButton reviewId={reviewId} />
        </>
      )}
    </Box>
  );
}
