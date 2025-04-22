export const blockUserMutation = (data: any) => {
  return {
    url: "/user/block-user",
    method: "PATCH",
    data,
  };
};
