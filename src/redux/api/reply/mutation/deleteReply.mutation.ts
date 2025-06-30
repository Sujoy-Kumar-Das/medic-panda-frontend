export const deleteReplyMutation = (id: string) => ({
  url: `/api/proxy/review/reply/${id}`,
  method: "DELETE",
  withCredentials: true,
});
