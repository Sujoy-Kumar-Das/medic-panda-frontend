export const forgotPasswordMutation = (data: any) => ({
  url: "/auth/forgot-password",
  method: "POST",
  data,
});
