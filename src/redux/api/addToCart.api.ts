import { TTagTypes } from "../tag-types";
import { baseApi } from "./base.api";

const addToCartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (data: any) => {
        return {
          url: "/cart",
          method: "POST",
          data,
        };
      },
      invalidatesTags: [TTagTypes.cart],
    }),
    getAllCartProducts: builder.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
      providesTags: [TTagTypes.cart],
    }),
    getSingleCartProducts: builder.query({
      query: (id: string) => ({
        url: `/cart/${id}`,
        method: "GET",
      }),
      providesTags: [TTagTypes.cart],
    }),
    incrementCartProduct: builder.mutation({
      query: (data: any) => {
        return {
          url: `/cart/${data.id}`,
          method: "PATCH",
          data,
        };
      },
      invalidatesTags: [TTagTypes.cart],
    }),
    removeCartProduct: builder.mutation({
      query: (data: any) => {
        return {
          url: `/cart/${data.product}`,
          method: "DELETE",
          data,
        };
      },
      invalidatesTags: [TTagTypes.cart],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetAllCartProductsQuery,
  useGetSingleCartProductsQuery,
  useRemoveCartProductMutation,
  useIncrementCartProductMutation,
} = addToCartApi;
