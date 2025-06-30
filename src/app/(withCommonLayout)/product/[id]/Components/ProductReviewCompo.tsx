"use client";
import { useAuth } from "@/hooks/useAuth";
import useDeleteReply from "@/hooks/useDeleteReply";
import useDeleteReview from "@/hooks/useDeleteReview";
import useProductReviewAndReplyContext from "@/hooks/useProductReviewAndReplyContext";
import { IReply, IReview } from "@/types";
import { Stack } from "@mui/material";
import { useState } from "react";
import ReviewHeader from "./ReviewHeader";
import ReviewList from "./ReviewList";
import ReviewModals from "./ReviewModal";

function ProductReviewCompo({ data: reviews }: { data: IReview[] }) {
  const { user } = useAuth();

  const [activeReply, setActiveReply] = useState<IReply | undefined>(undefined);

  const { add, edit, handleChangeAction, activeReview } =
    useProductReviewAndReplyContext();

  const { handlerDeleteReview, reviewLoadingIds } = useDeleteReview();
  const { handleReplyDelete, loadingIds } = useDeleteReply();

  const handleEditReply = (reply: IReply) => {
    setActiveReply(reply);
  };

  const handleCloseReplyModal: () => void = () => {
    setActiveReply(undefined);
  };

  return (
    <Stack spacing={4}>
      <ReviewHeader reviewCount={reviews.length} />

      <ReviewList
        reviews={reviews}
        user={user}
        activeReview={activeReview}
        add={add}
        edit={edit}
        reviewLoadingIds={reviewLoadingIds}
        loadingIds={loadingIds}
        onChangeAction={handleChangeAction}
        onDeleteReview={handlerDeleteReview}
        onEditReply={handleEditReply}
        onDeleteReply={handleReplyDelete}
      />

      <ReviewModals
        add={add}
        edit={edit}
        activeReview={activeReview}
        activeReply={activeReply}
        onChangeAction={handleChangeAction}
        onCloseReplyModal={handleCloseReplyModal}
      />
    </Stack>
  );
}

export default ProductReviewCompo;
