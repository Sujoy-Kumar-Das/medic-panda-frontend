export const createCustomerMutation = (data: any) => {
  return {
    url: "/user/customer",
    method: "POST",
    data,
  };
};
