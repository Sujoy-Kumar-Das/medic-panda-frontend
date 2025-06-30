export const getSingleOrderByAdminQuery = (id: string) => ({
  url: `/api/proxy/order/${id}/admin`,
  method: "GET",
  withCredentials: true,
});
