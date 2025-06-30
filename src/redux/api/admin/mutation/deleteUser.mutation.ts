export const deleteUserMutation = (data: any) => {
  return {
    url: "/api/proxy/user",
    method: "DELETE",
    data,
    withCredentials: true,
  };
};
