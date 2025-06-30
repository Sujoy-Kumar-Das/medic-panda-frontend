export const getAllUsersQuery = (params: any) => ({
  url: "/api/proxy//user",
  method: "GET",
  params,
  withCredentials: true,
});
