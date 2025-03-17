import { TTagTypes } from "../tag-types";
import { baseApi } from "./base.api";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/category",
        method: "POST",
        data,
      }),
      invalidatesTags: [TTagTypes.category],
    }),
    getAllCategories: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
      providesTags: [TTagTypes.category],
    }),
    getSingleCategory: builder.query({
      query: (id) => {
        return {
          url: `/category/${id}`,
          method: "GET",
        };
      },
      providesTags: [TTagTypes.category],
    }),
    editCategory: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/category/${id}`,
          method: "PATCH",
          data,
        };
      },
      invalidatesTags: [TTagTypes.category],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
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
