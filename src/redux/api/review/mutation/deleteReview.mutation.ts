export const deleteReviewMutation = (id: string) => ({
  url: `/api/proxy/review/${id}`,
  method: "DELETE",
  withCredentials: true,
});
