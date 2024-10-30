import { TTagTypes } from "../tag-types";
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
      invalidatesTags: [TTagTypes.wishList],
    }),
    getAllWishListProducts: builder.query({
      query: () => ({
        url: "/wish-list",
        method: "GET",
      }),
      providesTags: [TTagTypes.wishList],
    }),
    removeWishListProduct: builder.mutation({
      query: (id) => ({
        url: `/wish-list/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TTagTypes.wishList],
    }),
  }),
});

export const {
  useAddToWishListMutation,
  useGetAllWishListProductsQuery,
  useRemoveWishListProductMutation,
} = wishListApi;
