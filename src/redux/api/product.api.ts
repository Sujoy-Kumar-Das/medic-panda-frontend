import { TTagTypes } from "../tag-types";
import { baseApi } from "./base.api";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        data,
      }),
      invalidatesTags: [TTagTypes.product],
    }),
    getAllProducts: builder.query({
      query: (params) => ({
        url: "/product",
        method: "GET",
        params,
      }),
      providesTags: [TTagTypes.product],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: [TTagTypes.product],
    }),
    editProduct: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/product/${id}`,
          method: "PATCH",
          data,
        };
      },
      invalidatesTags: [TTagTypes.product],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TTagTypes.product],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useEditProductMutation,
  useDeleteProductMutation,
} = productApi;
