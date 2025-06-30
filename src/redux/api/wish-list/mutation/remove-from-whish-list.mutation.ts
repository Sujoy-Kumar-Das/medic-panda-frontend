export const removeWishListProductMutation = (id: string) => ({
  url: `/api/proxy/wish-list/${id}`,
  method: "DELETE",
  withCredentials: true,
});
