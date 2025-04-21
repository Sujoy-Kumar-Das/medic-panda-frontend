import CustomModal from "@/components/modal/customModal/CustomModal";
import useReplyDefaultValue from "@/hooks/useReplyDefaultValue";
import EditModalFormSkeleton from "./EditModalFormSkeleton";
import EditReplyForm from "./EditReplyForm";

interface EditReplyModalProps {
  open: boolean;
  onClose: () => void;
  replyId: string;
}

export default function EditReplyModal({
  open,
  onClose,
  replyId,
}: EditReplyModalProps) {
  const { defaultValue } = useReplyDefaultValue(replyId);
  return (
    <CustomModal open={open} onClose={onClose}>
      {defaultValue ? (
        <EditReplyForm
          replyId={replyId}
          onClose={onClose}
          defaultValues={defaultValue}
        />
      ) : (
        <EditModalFormSkeleton />
      )}
    </CustomModal>
  );
}
