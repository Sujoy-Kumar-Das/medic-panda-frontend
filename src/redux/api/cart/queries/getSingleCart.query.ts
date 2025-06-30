export const getSingleCartQuery = (id: string) => ({
  url: `/api/proxy/cart/${id}`,
  method: "GET",
  withCredentials: true,
});
