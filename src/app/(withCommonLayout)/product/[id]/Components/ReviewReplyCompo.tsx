"use client";
import { useGetAllReplyQuery } from "@/redux/api";
import { IReply } from "@/types";
import NoReplyFound from "./NoReplyFound";
import ReplyError from "./ReplyError";
import ReplyList from "./ReplyLIst";
import ReviewSkeletons from "./ReviewCardSkeletons";
import { IModifiedUserData } from "@/types/user.type";

interface ReviewReplyCompoProps {
  reviewId: string;
  onEditReply: (reply: IReply) => void;
  onDeleteReply: (id: string) => Promise<void>;
  user: IModifiedUserData | null;
  loadingIds: string[];
}

export default function ReviewReplyCompo({
  reviewId,
  onEditReply,
  onDeleteReply,
  user,
  loadingIds,
}: ReviewReplyCompoProps) {
  const { data: replies, isLoading, error } = useGetAllReplyQuery(reviewId);

  if (isLoading) {
    return <ReviewSkeletons />;
  }

  if (error) {
    return <ReplyError error={error} />;
  }

  if (!replies?.length) {
    return <NoReplyFound />;
  }

  return (
    <ReplyList
      replies={replies}
      user={user}
      loadingIds={loadingIds}
      onEditReply={onEditReply}
      onDeleteReply={onDeleteReply}
    />
  );
}
