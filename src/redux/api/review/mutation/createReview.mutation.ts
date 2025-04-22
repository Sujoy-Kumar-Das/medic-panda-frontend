export const createReviewMutation = (data: any) => ({
  url: "/review",
  method: "POST",
  data,
});
