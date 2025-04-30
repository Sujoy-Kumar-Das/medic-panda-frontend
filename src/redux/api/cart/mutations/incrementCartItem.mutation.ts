export const incrementCartItemMutation = (data: any) => {
  return {
    url: `/cart/decrement/${data.id}`,
    method: "PATCH",
    data,
  };
};
