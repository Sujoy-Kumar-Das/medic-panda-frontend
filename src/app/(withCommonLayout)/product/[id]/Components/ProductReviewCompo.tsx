"use client";
import { useAuth } from "@/hooks/useAuth";
import { IReview } from "@/types";
import { Stack } from "@mui/material";
import ReviewCard from "./ReviewCard";

function ProductReviewCompo({ data: reviews }: { data: IReview[] }) {
  const { user } = useAuth();
  return (
    <Stack spacing={4}>
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review} userId={user?.id} />
      ))}
    </Stack>
  );
}

export default ProductReviewCompo;
