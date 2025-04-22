export const deleteProductMutation = (id: string) => ({
  url: `/product/${id}`,
  method: "DELETE",
});
