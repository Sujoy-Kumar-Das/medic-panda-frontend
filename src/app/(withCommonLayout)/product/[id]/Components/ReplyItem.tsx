import { IReply } from "@/types";
import { IModifiedUserData } from "@/types/user.type";
import ReviewCard from "./ReviewCard";

interface ReplyItemProps {
  reply: IReply;
  user: IModifiedUserData | null;
  loadingIds: string[];
  onEdit: () => void;
  onDelete: () => Promise<void>;
}

export default function ReplyItem({
  reply,
  user,
  loadingIds,
  onEdit,
  onDelete,
}: ReplyItemProps) {
  const reviewData = {
    _id: reply._id,
    comment: reply.comment,
    createdAt: reply.createdAt,
    user: reply.user,
  };

  return (
    <ReviewCard
      review={reviewData}
      cardType="reply"
      user={user}
      onDelete={onDelete}
      reviewLoadingIds={loadingIds}
      onEdit={onEdit}
    />
  );
}
