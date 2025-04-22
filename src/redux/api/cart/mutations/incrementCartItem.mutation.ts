export const incrementCartItemMutation = (data: any) => {
  return {
    url: `/cart/${data.id}`,
    method: "PATCH",
    data,
  };
};

