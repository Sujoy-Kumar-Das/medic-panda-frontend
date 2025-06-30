export const deleteManufactureMutation = (id: string) => ({
  url: `/api/proxy/manufacturer/${id}`,
  method: "DELETE",
  withCredentials: true,
});
