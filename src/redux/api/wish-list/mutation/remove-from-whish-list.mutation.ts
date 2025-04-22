export const removeWishListProductMutation = (id: string) => ({
  url: `/wish-list/${id}`,
  method: "DELETE",
});
