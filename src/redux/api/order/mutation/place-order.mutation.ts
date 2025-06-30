export const placeOrderMutation = (data: any) => ({
  url: "/api/proxy/order",
  method: "POST",
  data,
  withCredentials: true,
});
