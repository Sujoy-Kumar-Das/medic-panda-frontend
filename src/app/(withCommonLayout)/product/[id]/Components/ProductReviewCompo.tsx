"use client";
import { useAuth } from "@/hooks/useAuth";
import useToggleState from "@/hooks/useToggleState";
import { IReview } from "@/types";
import { Box, Stack } from "@mui/material";
import ReviewCard from "./ReviewCard";
import ReviewReplyContainer from "./ReviewReplyContainer";

function ProductReviewCompo({ data: reviews }: { data: IReview[] }) {
  const { user } = useAuth();
  // handle the reviews show with buttons;
  const { state, toggle } = useToggleState(false);
  return (
    <Stack spacing={4}>
      {reviews.map((review) => (
        <Box key={review._id} sx={{ width: "100%" }}>
          <ReviewCard
            review={review}
            userId={user?.id}
            state={state}
            onToggle={toggle}
          />
          {state && <ReviewReplyContainer reviewId={review._id} />}
        </Box>
      ))}
    </Stack>
  );
}

export default ProductReviewCompo;
