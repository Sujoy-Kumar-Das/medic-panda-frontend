export const deleteUserMutation = (data: any) => {
  return {
    url: "/user",
    method: "DELETE",
    data,
  };
};
