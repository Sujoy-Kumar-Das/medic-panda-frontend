export const createAdminMutation = (data: any) => {
  return {
    url: "/api/proxy/user/admin",
    method: "POST",
    data,
    withCredentials: true,
  };
};
