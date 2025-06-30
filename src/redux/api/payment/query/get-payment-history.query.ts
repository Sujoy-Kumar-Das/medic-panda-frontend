export const getPaymentHistoryQuery = () => ({
  url: "/api/proxy/payment",
  method: "GET",
  withCredentials: true,
});
