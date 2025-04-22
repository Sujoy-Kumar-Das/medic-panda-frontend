export const getSingleProductQuery = (id: string) => ({
  url: `/product/${id}`,
  method: "GET",
});
