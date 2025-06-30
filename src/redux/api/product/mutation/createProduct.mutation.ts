export const createProductMutation = (data: any) => ({
  url: "/api/proxy/product",
  method: "POST",
  data,
  withCredentials: true,
});
