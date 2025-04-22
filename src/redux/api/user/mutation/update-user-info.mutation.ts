export const updateUserInfoMutation = (data: any) => ({
  url: `/user`,
  method: "PATCH",
  data,
});
