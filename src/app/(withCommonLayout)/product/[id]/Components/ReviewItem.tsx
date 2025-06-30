import { IReview } from "@/types";
import ReviewCard from "./ReviewCard";
import ReviewReplyCompo from "./ReviewReplyCompo";
import { IModifiedUserData } from "@/types/user.type";

interface ReviewItemProps {
  review: IReview;
  user?: IModifiedUserData | null;
  activeReview: IReview | undefined;
  add: string | undefined;
  edit: string | undefined;
  reviewLoadingIds: string[];
  loadingIds: string[];
  onChangeAction: (action: any, review: IReview | undefined) => void;
  onDeleteReview: (reviewId: string) => Promise<void>;
  onEditReply: (reply: any) => void;
  onDeleteReply: (replyId: string) => Promise<void>;
}

function ReviewItem({
  review,
  user,
  activeReview,
  add,
  edit,
  reviewLoadingIds,
  loadingIds,
  onChangeAction,
  onDeleteReview,
  onEditReply,
  onDeleteReply,
}: ReviewItemProps) {
  const isActiveReview = review._id === activeReview?._id;
  const shouldShowReplies = isActiveReview && !add && !edit;

  return (
    <ReviewCard
      review={review}
      openReviewReplyId={activeReview?._id}
      user={user}
      onRepliesShow={() => onChangeAction({ show: review._id }, review)}
      onRepliesHide={() => onChangeAction({ show: undefined }, undefined)}
      onAddReplyModalOpen={() => onChangeAction({ add: review._id }, review)}
      onEdit={() => onChangeAction({ edit: review._id }, review)}
      onDelete={() => onDeleteReview(review._id)}
      cardType="review"
      reviewLoadingIds={reviewLoadingIds}
    >
      {shouldShowReplies && (
        <ReviewReplyCompo
          reviewId={review._id}
          onEditReply={onEditReply}
          onDeleteReply={onDeleteReply}
          loadingIds={loadingIds}
          user={user}
        />
      )}
    </ReviewCard>
  );
}

export default ReviewItem;
