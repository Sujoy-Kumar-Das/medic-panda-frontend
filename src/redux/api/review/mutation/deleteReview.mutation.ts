export const deleteReviewMutation = (id: string) => ({
  url: `/review/${id}`,
  method: "DELETE",
});
