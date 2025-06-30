"use client";
import useCreateReview from "@/hooks/useCreateReview";
import { reviewValidationSchema } from "@/schemas/review.schema";
import { Box, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import ReviewForm from "./ReviewForm";

const defaultValues = {
  comment: "",
  rating: 0,
};

export default function AddReviewTab({ productId }: { productId: string }) {
  const { handlerFunc, isLoading } = useCreateReview();

  const handleAddReview = async (values: FieldValues) => {
    await handlerFunc(values, productId);
  };
  return (
    <Box>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          color: "text.primary",
          mb: 2,
        }}
      >
        Add a Review
      </Typography>

      <ReviewForm
        onSubmit={handleAddReview}
        isLoading={isLoading}
        defaultValues={defaultValues}
        validationSchema={reviewValidationSchema}
        isReply={false}
        btnText="Add Comment"
        loadingIndicator="Adding Comment..."
      />
    </Box>
  );
}
