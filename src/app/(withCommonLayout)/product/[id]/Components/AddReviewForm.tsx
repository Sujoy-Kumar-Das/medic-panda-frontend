import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import PandaRatingField from "@/components/form/PandaReview";
import useCreateReview from "@/hooks/useCreateReview";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { z } from "zod";

const reviewSchemaValidation = z.object({
  comment: z
    .string({ required_error: "Review cannot be empty" })
    .min(10, { message: "Review should be at least 10 characters" })
    .max(50, { message: "Review should not exceed 50 characters" }),

  rating: z
    .number({ required_error: "Rating is required" })
    .min(1, { message: "Rating must be at least 1" })
    .max(5, { message: "Rating cannot be more than 5" }),
});

export default function AddReviewForm({ productId }: { productId: string }) {
  const { handlerFunc, isLoading } = useCreateReview(productId);
  return (
    <PandaForm
      onSubmit={handlerFunc}
      resolver={zodResolver(reviewSchemaValidation)}
    >
      <PandaInputField
        name="comment"
        label="Your Review"
        multiline
        fullWidth
        rows={5}
        sx={{
          mb: 2,
          "& .MuiInputBase-root": {
            borderRadius: 2,
            backgroundColor: "background.default",
          },
        }}
      />

      <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 3 }}>
        <Typography component="legend" sx={{ mr: 2, color: "text.secondary" }}>
          Rating:
        </Typography>
        <PandaRatingField name="rating" />
      </Box>
      <LoadingButton
        type="submit"
        variant="contained"
        disabled={isLoading}
        loadingIndicator={"Submitting..."}
        sx={{
          fontWeight: "bold",
        }}
        loading={isLoading}
      >
        Submit Review
      </LoadingButton>
    </PandaForm>
  );
}
