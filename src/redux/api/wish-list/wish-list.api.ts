import { TTagTypes } from "../../tag-types";
import { baseApi } from "../base.api";
import {
  addToWishListMutation,
  removeWishListProductMutation,
} from "./mutation";
import { getAllWishListProductsQuery } from "./query";

const wishListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addToWishList: builder.mutation({
      query: addToWishListMutation,
      invalidatesTags: [TTagTypes.wishList],
    }),

    getAllWishListProducts: builder.query({
      query: getAllWishListProductsQuery,
      providesTags: [TTagTypes.wishList],
    }),

    removeWishListProduct: builder.mutation({
      query: removeWishListProductMutation,
      invalidatesTags: [TTagTypes.wishList],
    }),
  }),
});

export const {
  useAddToWishListMutation,
  useGetAllWishListProductsQuery,
  useRemoveWishListProductMutation,
} = wishListApi;
