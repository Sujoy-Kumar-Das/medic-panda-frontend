export const editReviewMutation = ({
  data,
  id,
}: {
  data: any;
  id: string;
}) => ({
  url: `/api/proxy/review/${id}`,
  method: "PATCH",
  data,
  withCredentials: true,
});
