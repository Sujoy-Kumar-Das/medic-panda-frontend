import { TTagTypes } from "@/redux/tag-types";
import { baseApi } from "../base.api";
import {
  addToCartMutation,
  incrementCartItemMutation,
  removeCartItemMutation,
} from "./mutations";
import {
  getAllCartsQuery,
  getCartLengthQuery,
  getSingleCartQuery,
} from "./queries";

export const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: addToCartMutation,
      invalidatesTags: [TTagTypes.cart],
    }),
    getAllCarts: builder.query({
      query: getAllCartsQuery,
      providesTags: [TTagTypes.cart],
    }),
    getSingleCart: builder.query({
      query: getSingleCartQuery,
      providesTags: [TTagTypes.cart],
    }),
    getCartLength: builder.query({
      query: getCartLengthQuery,
      providesTags: [TTagTypes.cart],
    }),

    incrementCartItem: builder.mutation({
      query: incrementCartItemMutation,
      invalidatesTags: [TTagTypes.cart],
    }),
    removeCartItem: builder.mutation({
      query: removeCartItemMutation,
      invalidatesTags: [TTagTypes.cart],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetAllCartsQuery,
  useGetSingleCartQuery,
  useIncrementCartItemMutation,
  useRemoveCartItemMutation,
  useGetCartLengthQuery,
} = cartApi;
