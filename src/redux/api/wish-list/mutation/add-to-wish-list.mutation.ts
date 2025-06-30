export const addToWishListMutation = (data: any) => {
  return {
    url: "/api/proxy/wish-list",
    method: "POST",
    data,
    withCredentials: true,
  };
};
