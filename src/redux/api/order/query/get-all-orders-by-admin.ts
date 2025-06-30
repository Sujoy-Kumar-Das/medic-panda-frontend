export const getAllOrdersByAdminQuery = (params: any) => ({
  url: `/api/proxy/order/admin`,
  method: "GET",
  params,
  withCredentials: true,
});
