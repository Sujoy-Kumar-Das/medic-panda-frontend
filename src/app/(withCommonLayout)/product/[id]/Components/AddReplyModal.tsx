import CustomModal from "@/components/modal/customModal/CustomModal";
import useAddReply from "@/hooks/useAddReply";
import { replyValidationSchema } from "@/schemas/reply.schema";
import { FieldValues } from "react-hook-form";
import ReviewForm from "./ReviewForm";

interface AddReplyModalProps {
  reviewId: string;
  onClose: () => void;
}

export default function AddReplyModal({
  reviewId,
  onClose,
}: AddReplyModalProps) {
  const { handlerFunc, isLoading } = useAddReply(onClose);

  const handleAddReply = async (values: FieldValues) => {
    await handlerFunc(values, reviewId);
  };
  return (
    <CustomModal open onClose={onClose}>
      <ReviewForm
        onSubmit={handleAddReply}
        defaultValues={{ comment: "" }}
        isLoading={isLoading}
        validationSchema={replyValidationSchema}
        btnText="Reply"
        loadingIndicator="Adding Reply..."
        isReply={true}
        onClose={onClose}
      />
    </CustomModal>
  );
}
