export const deleteCartMutation = (id: string) => {
  return {
    url: `/api/proxy/cart/${id}`,
    method: "DELETE",
    withCredentials: true,
  };
};
