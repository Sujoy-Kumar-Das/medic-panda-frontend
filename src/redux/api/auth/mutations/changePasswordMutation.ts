export const changePasswordMutation = (data: any) => ({
  url: "/auth/change-password",
  method: "POST",
  data,
});
