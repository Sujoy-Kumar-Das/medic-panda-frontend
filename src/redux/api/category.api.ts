import { baseApi } from "./base.api";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/category",
        method: "POST",
        data,
      }),
    }),
    getAllCategories: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
    }),
    getSingleCategory: builder.query({
      query: (id) => {
        return {
          url: `/category/${id}`,
          method: "GET",
        };
      },
    }),
    editCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/category/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
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
