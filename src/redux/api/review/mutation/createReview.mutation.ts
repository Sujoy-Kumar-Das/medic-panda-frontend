export const createReviewMutation = (data: any) => ({
  url: "/api/proxy/review",
  method: "POST",
  data,
  withCredentials: true,
});
