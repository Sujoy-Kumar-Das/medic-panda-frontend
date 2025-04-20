import CustomModal from "@/components/modal/customModal/CustomModal";
import AddReplyForm from "./AddReplyForm";

interface AddReplyModalProps {
  reviewId: string;
  open: boolean;
  onClose: () => void;
}

export default function AddReplyModal({
  reviewId,
  open,
  onClose,
}: AddReplyModalProps) {
  return (
    <CustomModal open={open} onClose={onClose}>
      <AddReplyForm reviewId={reviewId} onClose={onClose} />
    </CustomModal>
  );
}
