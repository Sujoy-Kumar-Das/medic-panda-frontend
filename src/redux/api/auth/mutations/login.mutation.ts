export const loginMutation = (data: any) => ({
  url: "/auth/login",
  method: "POST",
  data,
});
