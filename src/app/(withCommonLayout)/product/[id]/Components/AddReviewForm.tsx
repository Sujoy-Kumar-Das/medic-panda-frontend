import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import PandaRatingField from "@/components/form/PandaReview";
import useCreateReview from "@/hooks/useCreateReview";
import { reviewValidationSchema } from "@/schemas/review.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";

const defaultValues = {
  comment: "",
  rating: 0,
};

export default function AddReviewForm({ productId }: { productId: string }) {
  const { handlerFunc, isLoading } = useCreateReview(productId);
  return (
    <PandaForm
      onSubmit={handlerFunc}
      resolver={zodResolver(reviewValidationSchema)}
      defaultValues={defaultValues}
    >
      <PandaInputField
        name="comment"
        label="Your Review"
        type="text"
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
