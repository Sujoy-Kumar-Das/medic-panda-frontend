export const createCustomerMutation = (data: any) => {
  return {
    url: "/api/proxy/user/customer",
    method: "POST",
    data,
    withCredentials: true,
  };
};
