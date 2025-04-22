export const cancelOrderMutation = (id: string) => ({
  url: `/order/cancel/${id}`,
  method: "PATCH",
});
