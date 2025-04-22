export const getSingleOrderByAdminQuery = (id: string) => ({
  url: `/order/${id}/admin`,
  method: "GET",
});
