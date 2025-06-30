export const paymentNowMutation = (id: string) => ({
  url: `/api/proxy/pay-now/${id}`,
  method: "POST",
  withCredentials: true,
});
