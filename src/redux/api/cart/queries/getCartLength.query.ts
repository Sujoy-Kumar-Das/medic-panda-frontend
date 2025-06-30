export const getCartLengthQuery = () => ({
  url: `/api/proxy/cart-length`,
  method: "GET",
  withCredentials: true,
});
