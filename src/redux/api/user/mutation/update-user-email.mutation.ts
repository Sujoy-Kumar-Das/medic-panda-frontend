export const updateUserEmailMutation = (data: any) => ({
  url: "/api/proxy/user/email/",
  method: "PATCH",
  data,
});
