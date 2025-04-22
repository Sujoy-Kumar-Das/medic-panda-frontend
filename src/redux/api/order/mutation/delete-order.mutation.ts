export const deleteOrderMutation = (id: string) => ({
  url: `/order/${id}`,
  method: "DELETE",
});
