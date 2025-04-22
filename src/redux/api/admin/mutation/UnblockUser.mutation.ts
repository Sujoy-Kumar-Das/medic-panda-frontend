export const unblockUserMutation = (data: any) => {
  return {
    url: "/user/unblock-user",
    method: "PATCH",
    data,
  };
};
