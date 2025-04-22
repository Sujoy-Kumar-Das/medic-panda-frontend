export const addToWishListMutation = (data: any) => {
  return {
    url: "/wish-list",
    method: "POST",
    data,
  };
};
