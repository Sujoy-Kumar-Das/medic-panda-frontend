export const getSingleCartQuery = (id: string) => ({
  url: `/cart/${id}`,
  method: "GET",
});
