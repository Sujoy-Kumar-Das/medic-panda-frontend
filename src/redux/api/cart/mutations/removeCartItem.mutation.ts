export const removeCartItemMutation = (data: any) => {
  return {
    url: `/cart/${data.product}`,
    method: "DELETE",
    data,
  };
};
