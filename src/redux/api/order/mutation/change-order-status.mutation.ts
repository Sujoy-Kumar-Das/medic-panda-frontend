export const changeOrderStatusMutation = ({
  id,
  data,
}: {
  id: string;
  data: any;
}) => ({
  url: `/order/change-status/${id}`,
  method: "PATCH",
  data,
});
