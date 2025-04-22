import { TTagTypes } from "../../tag-types";
import { baseApi } from "../base.api";
import {
  createCategoryMutation,
  deleteCategoryMutation,
  editCategoryMutation,
} from "./mutation";
import { getAllCategoriesQuery, getSingleCategoryQuery } from "./query";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: createCategoryMutation,
      invalidatesTags: [TTagTypes.category],
    }),

    getAllCategories: builder.query({
      query: getAllCategoriesQuery,
      providesTags: [TTagTypes.category],
    }),

    getSingleCategory: builder.query({
      query: getSingleCategoryQuery,
      providesTags: [TTagTypes.category],
    }),

    editCategory: builder.mutation({
      query: editCategoryMutation,
      invalidatesTags: [TTagTypes.category],
    }),

    deleteCategory: builder.mutation({
      query: deleteCategoryMutation,
      invalidatesTags: [TTagTypes.category],
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetAllCategoriesQuery,
  useGetSingleCategoryQuery,
  useEditCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
