export const getSingleUserQuery = ({ id }: { id: string }) => ({
  url: `/user/${id}`,
  method: "GET",
});
