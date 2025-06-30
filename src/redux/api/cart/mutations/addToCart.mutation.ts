export const addToCartMutation = (data: any) => {
  return {
    url: "/api/proxy/cart",
    method: "POST",
    data,
    withCredentials: true,
  };
};
