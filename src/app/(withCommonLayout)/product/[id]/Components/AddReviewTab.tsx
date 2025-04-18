"use client";
import { Box, Typography } from "@mui/material";
import AddReviewForm from "./AddReviewForm";

export default function AddReviewTab({ productId }: { productId: string }) {
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

      <AddReviewForm productId={productId} />
    </Box>
  );
}
