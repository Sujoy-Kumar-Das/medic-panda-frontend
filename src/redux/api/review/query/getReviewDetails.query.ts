export const getReviewDetailsQuery = (id: string) => ({
  url: `/review-details/${id}`,
  method: "GET",
});
