import { TTagTypes } from "@/redux/tag-types";
import { baseApi } from "../base.api";
import {
  createProductMutation,
  deleteProductMutation,
  editProductMutation,
} from "./mutation";
import { getAllProductsQuery, getSingleProductQuery } from "./query";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: createProductMutation,
      invalidatesTags: [TTagTypes.product],
    }),

    getAllProducts: builder.query({
      query: getAllProductsQuery,
      providesTags: [TTagTypes.product],
    }),

    getSingleProduct: builder.query({
      query: getSingleProductQuery,
      providesTags: [TTagTypes.product],
    }),

    editProduct: builder.mutation({
      query: editProductMutation,
      invalidatesTags: [TTagTypes.product],
    }),

    deleteProduct: builder.mutation({
      query: deleteProductMutation,
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
