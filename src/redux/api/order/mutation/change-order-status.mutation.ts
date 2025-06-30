export const changeOrderStatusMutation = ({
  id,
  data,
}: {
  id: string;
  data: any;
}) => ({
  url: `/api/proxy/order/change-status/${id}`,
  method: "PATCH",
  data,
  withCredentials: true,
});
