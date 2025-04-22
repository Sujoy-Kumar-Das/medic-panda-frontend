export const getAllReplyQuery = (id: string) => ({
  url: `/review/reply/${id}`,
  method: "GET",
});
