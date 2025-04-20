"use client";
import { useAuth } from "@/hooks/useAuth";
import { IReview } from "@/types";
import { Box, Stack } from "@mui/material";
import ReviewCard from "./ReviewCard";
import ReviewReplyContainer from "./ReviewReplyContainer";

function ProductReviewCompo({ data: reviews }: { data: IReview[] }) {
  const { user } = useAuth();
  return (
    <Stack spacing={4}>
      {reviews.map((review) => (
        <Box key={review._id} sx={{ width: "100%" }}>
          <ReviewCard review={review} userId={user?.id} />
          <ReviewReplyContainer replies={review.replies} />
        </Box>
      ))}
    </Stack>
  );
}

export default ProductReviewCompo;
