export const updateUserInfoMutation = (data: any) => ({
  url: `/api/proxy/user`,
  method: "PATCH",
  data,
  withCredentials: true,
});
