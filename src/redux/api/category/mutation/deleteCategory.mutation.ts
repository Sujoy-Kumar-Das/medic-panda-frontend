export const deleteCategoryMutation = (id: string) => ({
  url: `/category/${id}`,
  method: "DELETE",
});
