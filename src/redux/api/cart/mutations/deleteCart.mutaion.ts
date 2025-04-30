export const deleteCartMutation = (id: string) => {
  return {
    url: `/cart/${id}`,
    method: "DELETE",
  };
};
