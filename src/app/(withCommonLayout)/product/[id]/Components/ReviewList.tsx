import { IReview } from "@/types";
import { Box } from "@mui/material";
import ReviewItem from "./ReviewItem";
import { IModifiedUserData } from "@/types/user.type";

interface ReviewListProps {
  reviews: IReview[];
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

function ReviewList({
  reviews,
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
}: ReviewListProps) {
  return (
    <>
      {reviews.map((review) => (
        <Box key={review._id} sx={{ width: "100%" }}>
          <ReviewItem
            review={review}
            user={user}
            activeReview={activeReview}
            add={add}
            edit={edit}
            reviewLoadingIds={reviewLoadingIds}
            loadingIds={loadingIds}
            onChangeAction={onChangeAction}
            onDeleteReview={onDeleteReview}
            onEditReply={onEditReply}
            onDeleteReply={onDeleteReply}
          />
        </Box>
      ))}
    </>
  );
}

export default ReviewList;
