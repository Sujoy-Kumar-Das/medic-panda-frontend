export const getSingleUserQuery = ({ id }: { id: string }) => ({
  url: `/api/proxy/user/${id}`,
  method: "GET",
  withCredentials: true,
});
