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
    }),
    getAllCartProducts: builder.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
    }),
    getSingleCartProducts: builder.query({
      query: (id: string) => ({
        url: `/cart/${id}`,
        method: "GET",
      }),
    }),
    removeCartProduct: builder.mutation({
      query: (data: any) => {
        return {
          url: `/cart/`,
          method: "PATCH",
          data,
        };
      },
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetAllCartProductsQuery,
  useGetSingleCartProductsQuery,
  useRemoveCartProductMutation,
} = addToCartApi;
