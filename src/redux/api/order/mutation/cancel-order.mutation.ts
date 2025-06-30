export const cancelOrderMutation = (id: string) => ({
  url: `/api/proxy/order/cancel/${id}`,
  method: "PATCH",
  withCredentials: true,
});
