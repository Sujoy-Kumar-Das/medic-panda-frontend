import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import PandaRatingField from "@/components/form/PandaReview";
import CancelButton from "@/components/ui/buttons/CancelButton";
import useEditReview from "@/hooks/useEditReview";
import { reviewValidationSchema } from "@/schemas/review.schema";
import { IReview } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Box, Stack, Typography } from "@mui/material";

interface EditReviewFormProps {
  reviewId: string;
  onClose: () => void;
  defaultValues: Partial<IReview>;
}

export default function EditReviewForm({
  reviewId,
  onClose,
  defaultValues,
}: EditReviewFormProps) {
  const { handlerFunc, isLoading } = useEditReview(reviewId, onClose);

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
      <Stack
        direction={"row"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        gap={1}
      >
        <CancelButton onClose={onClose}>Cancel</CancelButton>
        <LoadingButton
          type="submit"
          variant="contained"
          disabled={isLoading}
          loadingIndicator={"Updating Review..."}
          sx={{
            fontWeight: "bold",
          }}
          loading={isLoading}
        >
          Update Review
        </LoadingButton>
      </Stack>
    </PandaForm>
  );
}
