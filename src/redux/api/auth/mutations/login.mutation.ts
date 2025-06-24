export const loginMutation = (data: any) => ({
  url: "/api/proxy/auth/login",
  method: "POST",
  data,
  withCredentials: true,
});
