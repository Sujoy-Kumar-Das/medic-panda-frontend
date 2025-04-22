export const getAllReviewQuery = (id: string) => ({
  url: `/review/${id}`,
  method: "GET",
});
