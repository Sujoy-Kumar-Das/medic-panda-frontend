export const placeOrderMutation = (data: any) => ({
  url: "/order",
  method: "POST",
  data,
});
