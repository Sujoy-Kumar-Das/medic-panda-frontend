export const deleteManufactureMutation = (id: string) => ({
  url: `/manufacturer/${id}`,
  method: "DELETE",
});
