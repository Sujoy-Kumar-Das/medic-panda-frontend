export const changePasswordMutation = (data: any) => ({
  url: "/api/proxy/auth/change-password",
  method: "POST",
  data,
  withCredentials: true,
});
