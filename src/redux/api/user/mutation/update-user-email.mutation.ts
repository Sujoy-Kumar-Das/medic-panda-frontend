export const updateUserEmailMutation = (data: any) => ({
  url: "/user/email/",
  method: "PATCH",
  data,
});
