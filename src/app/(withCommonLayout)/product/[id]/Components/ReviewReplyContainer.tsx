import { IReply, IReview } from "@/types";
import { Box } from "@mui/material";
import ReviewReplyCard from "./ReviewReplyCard";

interface ReviewReplyContainerProps {
  replies: IReply[];
}

export default function ReviewReplyContainer({
  replies,
}: ReviewReplyContainerProps) {
  return (
    <Box width={"95%"} marginLeft={"auto"} marginTop={3}>
      {replies.map((reply) => (
        <ReviewReplyCard key={reply._id} reply={reply} />
      ))}
    </Box>
  );
}
