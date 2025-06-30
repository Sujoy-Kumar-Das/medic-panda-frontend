import CustomModal from "@/components/modal/customModal/CustomModal";
import useEditReply from "@/hooks/useEditReply";
import { replyValidationSchema } from "@/schemas/reply.schema";
import { IReply } from "@/types";
import { FieldValues } from "react-hook-form";
import ReviewForm from "./ReviewForm";

interface EditReplyModalProps {
  onClose: () => void;
  reply: IReply | null;
}

export default function EditReplyModal({
  onClose,
  reply,
}: EditReplyModalProps) {
  const { handleEditReply, isLoading } = useEditReply(onClose);

  const handleEditReplyWithValues = async (values: FieldValues) => {
    await handleEditReply(values, reply?._id as string);
  };

  return (
    <CustomModal open onClose={onClose}>
      <ReviewForm
        onSubmit={handleEditReplyWithValues}
        defaultValues={{ comment: reply?.comment }}
        isLoading={isLoading}
        validationSchema={replyValidationSchema}
        btnText="Edit Reply"
        loadingIndicator="Editing Reply..."
        isReply={true}
        onClose={onClose}
      />
    </CustomModal>
  );
}
