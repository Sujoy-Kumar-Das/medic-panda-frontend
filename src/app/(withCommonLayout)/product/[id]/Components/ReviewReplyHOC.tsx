import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import ReviewReplyCompo from "./ReviewReplyCompo";

const ReviewReplyHOC = HandleLoadingErrorAndNoData(ReviewReplyCompo);

export default ReviewReplyHOC;
