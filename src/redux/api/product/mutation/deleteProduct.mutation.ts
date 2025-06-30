export const deleteProductMutation = (id: string) => ({
  url: `/api/proxy/product/${id}`,
  method: "DELETE",
  withCredentials: true,
});
