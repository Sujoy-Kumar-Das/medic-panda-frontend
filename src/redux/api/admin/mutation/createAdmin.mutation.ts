export const createAdminMutation = (data: any) => {
  return {
    url: "/user/admin",
    method: "POST",
    data,
  };
};
