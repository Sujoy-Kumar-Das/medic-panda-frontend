export const deleteOrderMutation = (id: string) => ({
  url: `/api/proxy/order/${id}`,
  method: "DELETE",
  withCredentials: true,
});
