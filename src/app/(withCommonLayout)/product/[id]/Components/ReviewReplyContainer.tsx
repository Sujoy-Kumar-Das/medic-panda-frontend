"use client";
import ErrorCard from "@/components/shared/error/ErrorCard";
import NoDataFoundCard from "@/components/shared/notFound/NoDataFoundCard";
import { useGetAllReplyQuery } from "@/redux/api/reply.api";
import ReplySkeletons from "./ReplySkeletons";
import ReviewReplyHOC from "./ReviewReplyHOC";

interface ReviewReplyContainerProps {
  reviewId: string;
}

export default function ReviewReplyContainer({
  reviewId,
}: ReviewReplyContainerProps) {
  const query = useGetAllReplyQuery(reviewId);
  return (
    <ReviewReplyHOC
      query={query}
      noDataMessage="This item had no review."
      LoaderCompo={ReplySkeletons}
      NoDataCompo={() => (
        <NoDataFoundCard
          title="No Replies Yet"
          subtitle="Be the first to respond and join the conversation."
          sxProps={{
            width: "95%",
            marginLeft: "auto",
            marginTop: 3,
          }}
        />
      )}
      ErrorCompo={ErrorCard}
    />
  );
}
