import CustomModal from "@/components/modal/customModal/CustomModal";
import useReviewDefaultValues from "@/hooks/useReviewDefaultValues";
import EditModalFormSkeleton from "./EditModalFormSkeleton";
import EditReviewForm from "./EditReviewForm";

interface EditReviewModalProps {
  open: boolean;
  onClose: () => void;
  reviewId: string;
}

export default function EditReviewModal({
  open,
  onClose,
  reviewId,
}: EditReviewModalProps) {
  const { defaultValues } = useReviewDefaultValues({ reviewId });

  return (
    <CustomModal open={open} onClose={onClose}>
      {defaultValues ? (
        <EditReviewForm
          reviewId={reviewId}
          onClose={onClose}
          defaultValues={defaultValues}
        />
      ) : (
        <EditModalFormSkeleton />
      )}
    </CustomModal>
  );
}
