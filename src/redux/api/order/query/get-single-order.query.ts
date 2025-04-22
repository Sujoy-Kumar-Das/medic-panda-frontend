export const getSingleOrderQuery = (id: string) => ({
  url: `/order/${id}`,
  method: "GET",
});
