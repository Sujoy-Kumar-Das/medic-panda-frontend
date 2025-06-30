import CustomModal from "@/components/modal/customModal/CustomModal";
import useEditReview from "@/hooks/useEditReview";
import { reviewValidationSchema } from "@/schemas/review.schema";
import { IReview } from "@/types";
import { FieldValues } from "react-hook-form";
import ReviewForm from "./ReviewForm";

interface EditReviewModalProps {
  onClose: () => void;
  review: IReview;
}

export default function EditReviewModal({
  onClose,
  review,
}: EditReviewModalProps) {
  const { handlerFunc, isLoading } = useEditReview(onClose);

  const handleEditReview = async (values: FieldValues) => {
    await handlerFunc(values, review._id);
  };

  const defaultValues = { comment: review.comment, rating: review.rating };

  return (
    <CustomModal open onClose={onClose}>
      <ReviewForm
        onSubmit={handleEditReview}
        defaultValues={defaultValues}
        btnText="Edit Review"
        loadingIndicator="Editing Review..."
        isLoading={isLoading}
        validationSchema={reviewValidationSchema}
        isReply={false}
        onClose={onClose}
      />
    </CustomModal>
  );
}
