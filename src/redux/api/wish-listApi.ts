import { baseApi } from "./base.api";

const wishListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addToWishList: builder.mutation({
      query: (data) => {
        return {
          url: "/wish-list",
          method: "POST",
          data,
        };
      },
    }),
    getAllWishListProducts: builder.query({
      query: () => ({
        url: "/wish-list",
        method: "GET",
      }),
    }),
    getSingleWishListProduct: builder.query({
      query: (id) => {
        return {
          url: `/wish-list/${id}`,
          method: "GET",
        };
      },
    }),
    removeWishListProduct: builder.mutation({
      query: (id) => ({
        url: `/wish-list/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddToWishListMutation,
  useGetAllWishListProductsQuery,
  useGetSingleWishListProductQuery,
  useRemoveWishListProductMutation,
} = wishListApi;
