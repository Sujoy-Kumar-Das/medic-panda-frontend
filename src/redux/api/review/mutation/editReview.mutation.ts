export const editReviewMutation = ({
  data,
  id,
}: {
  data: any;
  id: string;
}) => ({
  url: `/review/${id}`,
  method: "PATCH",
  data,
});
