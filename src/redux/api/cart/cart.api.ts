import { TTagTypes } from "@/redux/tag-types";
import { baseApi } from "../base.api";
import { addToCartMutation, deleteCartMutation } from "./mutations";
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
    deleteCart: builder.mutation({
      query: deleteCartMutation,
      invalidatesTags: [TTagTypes.cart],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetAllCartsQuery,
  useGetSingleCartQuery,
  useGetCartLengthQuery,
  useDeleteCartMutation,
} = cartApi;
