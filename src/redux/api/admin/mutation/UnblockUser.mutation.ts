export const unblockUserMutation = (data: any) => {
  return {
    url: "/api/proxy/user/unblock-user",
    method: "PATCH",
    data,
    withCredentials: true,
  };
};
