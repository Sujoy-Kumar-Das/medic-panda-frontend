export const resetPasswordMutation = (data: any) => ({
  url: "/auth/reset-password",
  method: "POST",
  data,
});
