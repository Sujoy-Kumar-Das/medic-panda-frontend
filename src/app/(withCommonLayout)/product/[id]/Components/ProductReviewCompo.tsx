"use client";
import { IReview } from "@/types";
import { Stack } from "@mui/material";
import ReviewCard from "./ReviewCard";

function ProductReviewCompo({ data: reviews }: { data: IReview[] }) {
  console.log(reviews);
  return (
    <Stack spacing={4}>
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </Stack>
  );
}

export default ProductReviewCompo;
