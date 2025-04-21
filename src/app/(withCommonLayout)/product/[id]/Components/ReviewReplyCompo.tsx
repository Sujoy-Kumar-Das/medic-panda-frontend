import { IReply } from "@/types";
import { Box } from "@mui/material";
import ReviewReplyCard from "./ReviewReplyCard";

export default function ReviewReplyCompo({
  data: replies,
}: {
  data: IReply[];
}) {
  return (
    <Box
      width={"95%"}
      marginLeft={"auto"}
      marginTop={3}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
    >
      {replies?.map((reply) => (
        <ReviewReplyCard key={reply._id} reply={reply} />
      ))}
    </Box>
  );
}
