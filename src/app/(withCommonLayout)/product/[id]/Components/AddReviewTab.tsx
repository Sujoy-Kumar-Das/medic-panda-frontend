"use client";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import PandaRatingField from "@/components/form/PandaReview";
import useUserInfo from "@/hooks/useUserInfo";
import { useCreateReviewMutation } from "@/redux/api/review.api";
import { IGenericErrorResponse } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
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

export default function AddReviewTab() {
  const [createReview, { isLoading, isError, error, isSuccess }] =
    useCreateReviewMutation();
  const { userInfo: user } = useUserInfo();
  const router = useRouter();
  const { id } = useParams();

  const handleSubmit = useCallback(
    async (values: FieldValues) => {
      if (!user) {
        toast.error("Please login for add your review.");
        router.push("/register/login");
        return;
      }

      const reviewData = {
        user: user.userId,
        product: id,
        comment: values.comment,
        rating: values.rating,
      };

      await createReview(reviewData);
    },
    [user, id, createReview, router]
  );

  useEffect(() => {
    if (isSuccess) {
      toast.success("Thanks for your review.");
    } else if (isError) {
      toast.error((error as IGenericErrorResponse).message);
    }
  }, [isError, isSuccess, error]);

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

      <PandaForm
        onSubmit={handleSubmit}
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
          <Typography
            component="legend"
            sx={{ mr: 2, color: "text.secondary" }}
          >
            Rating:
          </Typography>
          <PandaRatingField name="rating" />
        </Box>
        <Button
          type="submit"
          variant="contained"
          disabled={isLoading}
          sx={{
            fontWeight: "bold",
          }}
        >
          {isLoading ? "Submitting..." : "Submit Review"}
        </Button>
      </PandaForm>
    </Box>
  );
}
