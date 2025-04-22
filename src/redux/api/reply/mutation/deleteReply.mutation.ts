export const deleteReplyMutation = (id: string) => ({
  url: `/review/reply/${id}`,
  method: "DELETE",
});
