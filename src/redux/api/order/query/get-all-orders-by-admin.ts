export const getAllOrdersByAdminQuery = (params: any) => ({
  url: `/order/admin`,
  method: "GET",
  params,
});
