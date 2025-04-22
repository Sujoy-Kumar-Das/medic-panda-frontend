export const addToCartMutation = (data: any) => {
  return {
    url: "/cart",
    method: "POST",
    data,
  };
};
