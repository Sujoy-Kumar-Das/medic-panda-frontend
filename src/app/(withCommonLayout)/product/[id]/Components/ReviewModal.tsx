import { IReply, IReview } from "@/types";
import AddReplyModal from "./AddReplyModal";
import EditReplyModal from "./EditReplyModal";
import EditReviewModal from "./EditReviewModal";

interface ReviewModalsProps {
  add: string | undefined;
  edit: string | undefined;
  activeReview: IReview | undefined;
  activeReply: IReply | undefined;
  onChangeAction: (action: any, review: IReview | undefined) => void;
  onCloseReplyModal: () => void;
}

function ReviewModals({
  add,
  edit,
  activeReview,
  activeReply,
  onChangeAction,
  onCloseReplyModal,
}: ReviewModalsProps) {
  const handleCloseAddModal = () => {
    onChangeAction({ add: undefined }, undefined);
  };

  const handleCloseEditModal = () => {
    onChangeAction({ edit: undefined }, undefined);
  };

  return (
    <>
      {add && activeReview && (
        <AddReplyModal
          onClose={handleCloseAddModal}
          reviewId={activeReview._id}
        />
      )}

      {edit && activeReview && (
        <EditReviewModal onClose={handleCloseEditModal} review={activeReview} />
      )}

      {activeReply && (
        <EditReplyModal onClose={onCloseReplyModal} reply={activeReply} />
      )}
    </>
  );
}

export default ReviewModals;
