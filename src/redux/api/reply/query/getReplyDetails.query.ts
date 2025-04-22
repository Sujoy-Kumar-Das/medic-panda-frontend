export const getReplyDetailsQuery = (id: string) => ({
  url: `/review/reply/details/${id}`,
  method: "GET",
});
