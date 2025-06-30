export const blockUserMutation = (data: any) => {
  return {
    url: "/api/proxy/user/block-user",
    method: "PATCH",
    data,
    withCredentials: true,
  };
};
