"use client";
import { useGetReviewDetailsQuery } from "@/redux/api";
import { IReview } from "@/types";
import { useEffect, useState } from "react";

export default function useReviewDefaultValues({
  reviewId,
}: {
  reviewId: string;
}) {
  const { data: review, ...apiResponse } = useGetReviewDetailsQuery(reviewId);

  const [defaultValues, setDefaultValues] = useState<Partial<IReview> | null>(
    null
  );

  useEffect(() => {
    if (!review) {
      setDefaultValues(null);
      return;
    }
    setDefaultValues({
      comment: review?.comment,
      rating: review?.rating,
    });
  }, [review]);

  return { defaultValues, ...apiResponse };
}
