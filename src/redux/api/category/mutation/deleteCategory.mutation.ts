export const deleteCategoryMutation = (id: string) => ({
  url: `/api/proxy/category/${id}`,
  method: "DELETE",
  withCredentials: true,
});
