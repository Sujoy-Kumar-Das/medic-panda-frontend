export const getAllWishListProductsQuery = (params: any) => ({
  url: "/api/proxy/wish-list",
  method: "GET",
  params,
});
