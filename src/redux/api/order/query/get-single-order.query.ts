export const getSingleOrderQuery = (id: string) => ({
  url: `/api/proxy/order/${id}`,
  method: "GET",
  withCredentials: true,
});
